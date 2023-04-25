import { Ionicons } from "@expo/vector-icons";
import { Avatar, Box, HStack, Icon, IconButton, Image, Input, KeyboardAvoidingView, Pressable, Text } from "native-base";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "../components";

const imageSize = Dimensions.get("window").width / 2;

export function Chat() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>

        <Box flex={1} p={5}>
          <Message message={{ type: "text" }} />
          <Message message={{ type: "image" }} />

          <HStack mt={10} justifyContent="flex-end" alignItems="flex-end" space={2}>
            <Text
              fontSize="10"
              color="gray.500"
            >
              12/02/2023
            </Text>

            <Box
              p={3}
              maxW="70%"
              rounded="xl"
              bg="danger.500"
              roundedBottomRight="xs"
            >
              <Text color="white">
                AIUSHDUASHDU auish diuash diuah sdiuah sdiuahsaushdiuash d
              </Text>
            </Box>

            <Avatar size="sm" bg="danger.600">CA</Avatar>
          </HStack>

          <HStack mt={10} justifyContent="flex-end" alignItems="flex-end" space={2}>
            <Text
              fontSize="10"
              color="gray.500"
            >
              12/02/2023
            </Text>

            <Box
              p={3}
              maxW="70%"
              rounded="xl"
              bg="danger.500"
              roundedBottomRight="xs"
            >
              <Image
                w={imageSize}
                h={imageSize}
                rounded="md"
                alt="AIUSHD"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N-2wKjiwWXkQL3M1-_Az2AHaFj%26pid%3DApi&f=1&ipt=4e0102194347edc2a4dba89517269fb0668f4368cb97ecc6904a6c8defe464af&ipo=images"
              />
            </Box>

            <Avatar size="sm" bg="danger.600">CA</Avatar>
          </HStack>
        </Box>

        <HStack
          p={3}
          bottom={3}
          shadow={3}
          marginX={3}
          rounded="lg"
          bg="gray.100"
          position="absolute"
        >

          <Input
            mr={3}
            flex={1}
            size="md"
            color="gray.700"
            variant="unstyled"
            placeholder="Type a message"
            InputLeftElement={
              <Pressable onPress={() => alert("AKSDNJSA")}>
                <Icon
                  size={7}
                  color={"gray.400"}
                  as={<Ionicons name="attach" />}
                />
              </Pressable>
            }
          />

          <IconButton
            rounded="full"
            bg="danger.500"
            onPress={() => alert("SEND")}
            icon={
              <Icon
                size={6}
                color={"white"}
                as={<Ionicons name="paper-plane-outline" />}
              />
            }
          />
        </HStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}