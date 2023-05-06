import { Avatar, Box, HStack, Text } from "native-base";

export function MyMessageText({ message }) {

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
          {message?.message}
        </Text>
      </Box>

      <Avatar size="sm" bg="danger.600">{message?.user?.name[ 0 ]}</Avatar>
    </HStack>
  );
}