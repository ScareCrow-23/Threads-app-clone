import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";

const UserPost = () => {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={"/mark/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} align={"center"}>
          <Avatar size="md" name="Mark" src="/zuck-avatar.png" />
          <Box w="1px" h={"full "} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="Ben Dover"
              src="https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_960_720.jpg"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="Ben Dover"
              src="https://images.unsplash.com/photo-1722648404028-6454d2a93602?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position={"absolute"}
              bottom={"0px"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="Ben Dover"
              src="https://images.unsplash.com/photo-1722022233014-2c01fea16fa3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              position={"absolute"}
              bottom={"0px"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                @mark
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>This is a sample post. Its not real.</Text>
          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image src="/post1.png" w={"full"} />
          </Box>
          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Text color="gray.light" fontSize={"sm"}>
              69 replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color="gray.light" fontSize={"sm"}>
              79 likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
