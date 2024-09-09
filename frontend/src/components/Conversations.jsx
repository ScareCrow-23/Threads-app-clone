import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";

const Conversations = () => {
  return (
    <Flex
      gap={4}
      alignItems={"center"}
      p={1}
      _hover={{
        cursor: "pointer",
        bg: useColorModeValue("gray.600", "gray.dark"),
        color: "white",
      }}
      borderRadius={"md"}
    >
      <WrapItem>
        <Avatar
          size={{
            base: "xs",
            sm: "sm",
            md: "md",
          }}
          src="https://cdn.pixabay.com/photo/2023/07/21/16/23/cat-8141916_1280.jpg"
        >
        <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
      </WrapItem>
      <Stack direction={"column"} fontSize={"sm"}>
        <Text fontWeight="700" display={"flex"} alignItems={"center"}>
          Mark <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
        <Text display={"flex"} fontSize={"xs"} alignItems={"center"} gap={1}>
          Hello...
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversations;
