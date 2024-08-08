import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={312}
        replies={21}
        postImg="/post1.png"
        postTitle="Dummy Post"
      />
      <UserPost
        likes={410}
        replies={61}
        postImg="/post2.png"
        postTitle="Another Dummy Post"
      />
      <UserPost likes={41} replies={6} postTitle="Post Without Image" />
    </>
  );
};

export default UserPage;
