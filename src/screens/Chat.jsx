import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message, MyMessage, MyMessageImage, MyMessageText, OptionsButton } from "../components";
import { Box, Center, Fab, HStack, Icon, IconButton, Input, KeyboardAvoidingView, Pressable, ScrollView, Stagger, useDisclose } from "native-base";

export function Chat() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>

        <ScrollView px={5}>
          <Message message={{ type: "text" }} />
          <Message message={{ type: "image" }} />

          <MyMessage message={{ type: "text" }} />
          <MyMessage message={{ type: "image" }} />

          <Box h={100} />
        </ScrollView>

        <HStack
          p={3}
          bottom={2}
          shadow={2}
          marginX={2}
          rounded="lg"
          bg="gray.100"
          position="absolute"
        >
          <OptionsButton />

          <Input
            mr={2}
            ml={12}
            flex={1}
            size="md"
            color="gray.700"
            variant="unstyled"
            placeholder="Type a message"
          // InputLeftElement={

          // <OptionsButton />

          // <Pressable onPress={() => alert("AKSDNJSA")}>
          //   <Icon
          //     size={7}
          //     color={"gray.400"}
          //     as={<Ionicons name="attach" />}
          //   />
          // </Pressable>
          // }
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