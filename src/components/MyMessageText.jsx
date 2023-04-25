import { Avatar, Box, HStack, Text } from "native-base";

export function MyMessageText({ message }) {

  const messageTxt = {
    _id: "1",
    type: "text",
    message: "asdiauhsdiahsd",
    createdAt: new Date(),
    user: {
      _id: "1",
      name: "Caio AReis",
    }
  };

  return (
    <HStack justifyContent="flex-end" alignItems="flex-end" space={2} my={2}>
      <Text fontSize="10" color="gray.500">12/02/2023</Text>

      <Box
        p={3}
        maxW="70%"
        rounded="xl"
        bg="danger.500"
        roundedBottomRight="xs"
      >
        <Text color="white">
          AIUSHDUASHDU ash d
        </Text>
      </Box>

      <Avatar size="sm" bg="danger.600">CA</Avatar>
    </HStack>
  );
}