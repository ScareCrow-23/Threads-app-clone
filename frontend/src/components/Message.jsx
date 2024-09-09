import { Avatar, Flex, Text } from "@chakra-ui/react";

const Message = ({ ownMessage }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text
            maxWidth={"350px"}
            bgGradient="linear(to-r, #ffe1e1, pink.500)"
            color={"black"}
            p={3}
            borderRadius={"md"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo, architecto dignissimos quisquam vero, dolore eius perferendis
            officia iste assumenda nisi cumque incidunt quo minus. Aliquid alias
            perspiciatis atque cum repudiandae sit. Vel ullam excepturi
            corrupti, deleniti, fugiat velit sit maxime sunt voluptatem unde
            expedita voluptas. Eligendi officia temporibus odit.
          </Text>
          <Avatar src="" w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="" w={7} h={7} />
          <Text
            maxWidth={"350px"}
            bg={"gray.400"}
            color={"black"}
            p={3}
            borderRadius={"md"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo, architecto dignissimos quisquam vero, dolore eius perferendis
            officia iste assumenda nisi cumque incidunt quo minus. Aliquid alias
            perspiciatis atque cum repudiandae sit. Vel ullam excepturi
            corrupti, deleniti, fugiat velit sit maxime sunt voluptatem unde
            expedita voluptas. Eligendi officia temporibus odit.
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Message;
