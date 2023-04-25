import { Dimensions } from "react-native";
import { Avatar, Box, HStack, Image, Text } from "native-base";

const imageSize = Dimensions.get("window").width / 2;

export function MyMessageImage({ message }) {

  const messageImg = {
    _id: "2",
    type: "image",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RfoIIK-oJEMs14AwYL6JiAHaEK%26pid%3DApi&f=1&ipt=51af7dd7b011b9ba9ae8027a26e64cec5bf0a4b0b9f20a4467cc54f4a2028df5&ipo=images",
    createdAt: new Date(),
    user: {
      _id: "1",
      name: "Caio AReis"
    }
  }

  return (
    <HStack justifyContent="flex-end" alignItems="flex-end" space={2} my={2}>
      <Text fontSize="10" color="gray.500">12/02/2023</Text>

      <Box
        p={2}
        maxW="70%"
        rounded="xl"
        bg="danger.500"
        roundedBottomRight="xs"
      >
        <Image
          alt="AIUSHD"
          rounded="md"
          roundedBottomRight="xs"
          w={imageSize} h={imageSize}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N-2wKjiwWXkQL3M1-_Az2AHaFj%26pid%3DApi&f=1&ipt=4e0102194347edc2a4dba89517269fb0668f4368cb97ecc6904a6c8defe464af&ipo=images"
        />
      </Box>

      <Avatar size="sm" bg="danger.600">CA</Avatar>
    </HStack>
  );
}