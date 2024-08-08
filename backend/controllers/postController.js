import User from "../models/userModel.js";
import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;
    if (!postedBy || !text)
      return res.status(400).json({ message: "Please fill all the feilds" });

    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user._id.toString() !== req.body._id.toString()) {
      return res.status(401).json({ message: "Unauthorized to create post" });
    }
    const maxLength = 500;
    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ message: `Text should not exceed ${maxLength} characters` });
    }
    const newPost = new Post({ postedBy, text, img });
    await newPost.save();

    res.status(200).json({ message: "Post created successfully", newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post Found", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized to delete post" });
    }

    await Post.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

const likeUnlikePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      // Unlike post
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post Unliked successfully" });
    } else {
      // Like post
      post.likes.push(userId);
      await Post.save();
      res.status(200).json({ message: "Post Liked Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

const replyToPost = async (req, res) => {
  try {
    const text = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    if (!text) {
      return res.status(400).json({ message: "Please enter a reply" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);
    await post.save();

    res.status(200).json({ message: "Reply added successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

const getFeedPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const following = user.following;

    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createdAt: -1,
    });
    res.status(200).json({ feedPosts });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error: ", error.message);
  }
};

export {
  createPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getFeedPost,
};
