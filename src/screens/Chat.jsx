import { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message, MyMessage, OptionsButton } from "../components";
import { Box, Center, HStack, Heading, Icon, IconButton, Image, Input, KeyboardAvoidingView, ScrollView } from "native-base";

import { database } from "../config/firebase";
import { SessionContext } from "../config/SessionContext";
import NoMessages from "../../assets/images/NoMessages.png";
import { Timestamp, addDoc, collection } from "firebase/firestore";

export function Chat() {

  const [ messages, setMessages ] = useState([]);
  const session = useContext(SessionContext)[ 0 ];
  const [ isSending, setIsSending ] = useState(false);
  const [ textMessage, setTextMessage ] = useState("");

  const onSend = () => {
    if (!Boolean(textMessage)) return;

    setIsSending(true);

    const body = {
      type: "text",
      message: textMessage,
      createdAt: Timestamp.now(),
      user: {
        uid: session?.uid,
        name: session?.name,
      }
    }

    addDoc(collection(database, "chat"), body)
      .then(() => {
        setMessages(prev => {
          prev.push(body);
          return prev;
        });

        setTextMessage("");
        setIsSending(false);
      }).catch(() => { alert("Ocorreu um erro!!"); });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>
        {/* {messages?.length ? ( */}
        <ScrollView px={5}>
          {messages.map(message => {
            message?.user?.uid === session?.uid
              ? <MyMessage message={{ ...message }} />
              : <Message message={{ ...message }} />
          }
          )}

          <Box h={100} />
        </ScrollView>
        {/* // ) : (
        //   <Center flex={1}>
        //     <Image alt="No messages" source={NoMessages} size={200} />
        //     <Heading mt={3}>No messages!</Heading>
        //   </Center>
        // )} */}

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
            value={textMessage}
            placeholder="Type a message"
            onChangeText={e => setTextMessage(e)}
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
            onPress={onSend}
            isDisabled={isSending}
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