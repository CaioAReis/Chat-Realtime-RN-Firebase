import { useContext, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message, MyMessage, OptionsButton } from "../components";
import { Center, FlatList, HStack, Heading, Icon, IconButton, Image, Input, KeyboardAvoidingView } from "native-base";

import { database } from "../config/firebase";
import { SessionContext } from "../config/SessionContext";
import NoMessages from "../../assets/images/NoMessages.png";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

export function Chat() {

  const [ messages, setMessages ] = useState([]);
  const session = useContext(SessionContext)[ 0 ];
  const [ isSending, setIsSending ] = useState(false);
  const [ textMessage, setTextMessage ] = useState("");

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chat");
    const q = query(collectionRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });

    return unsubscribe;
  }, []);


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
      // .then(() => setMessages(prev => { prev.push(body); return prev; }))
      .catch(() => { alert("Ocorreu um erro!!"); })
      .finally(() => { setTextMessage(""); setIsSending(false); });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>
        <FlatList
          px={5}
          data={messages}
          renderItem={({ item, index }) => {
            return item?.user?.uid === session?.uid
              ? <MyMessage message={item} key={index} />
              : <Message message={item} key={index} />
          }}

          ListEmptyComponent={
            <Center flex={1} marginTop={20}>
              <Image alt="No messages" source={NoMessages} size={200} />
              <Heading mt={3}>No messages!</Heading>
            </Center>
          }
        />

        <HStack
          p={3}
          m={3}
          shadow={2}
          rounded="lg"
          bg="gray.200"
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