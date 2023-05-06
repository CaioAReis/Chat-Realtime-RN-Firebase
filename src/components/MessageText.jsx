import { Avatar, Box, HStack, Text } from "native-base";

export function MessageText({ message }) {

  return (
    <HStack alignItems="flex-end" space={2} my={2}>
      <Avatar size="sm" bg="danger.600">{message?.user?.name[ 0 ]}</Avatar>

      <Box
        p={3}
        maxW="70%"
        rounded="xl"
        bg="gray.200"
        borderWidth={1}
        borderColor="gray.300"
        roundedBottomLeft="xs"
      >
        <Text fontSize={11} fontWeight="bold" color="danger.600" mb={2}>
          {message?.user?.name}
        </Text>
        <Text color="gray.600">
          {message?.message}
        </Text>
      </Box>

      <Text fontSize="10" color="gray.500">12/02/2023</Text>
    </HStack>
  );
}