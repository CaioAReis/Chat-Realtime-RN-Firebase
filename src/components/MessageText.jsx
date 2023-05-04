import { Avatar, Box, HStack, Text } from "native-base";

export function MessageText({ message }) {

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
    <HStack alignItems="flex-end" space={2} my={2}>
      <Avatar size="sm" bg="danger.600">CA</Avatar>

      <Box
        p={3}
        maxW="70%"
        rounded="xl"
        bg="gray.200"
        roundedBottomLeft="xs"
      >
        <Text fontSize={11} fontWeight="bold" color="danger.600" mb={2}>
          CAIO ALMEIDA
        </Text>
        <Text color="gray.600">
          AIUSHDUASHDU auish diuash diuah sdiuah sdiuahsaushdiuash d
        </Text>
      </Box>

      <Text fontSize="10" color="gray.500">12/02/2023</Text>
    </HStack>
  );
}