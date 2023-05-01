import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SessionContext } from "../config/SessionContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Box, Fab, HStack, Heading, Icon, Pressable, Text } from "native-base";

export function Home({ navigation }) {

  const [ session, setSession ] = useContext(SessionContext);

  const handleLogOut = () => {
    setSession(null);
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1}>
        <HStack alignItems="center" justifyContent="space-between" p={3}>
          <HStack space={3} alignItems="center">
            <Avatar bg="danger.600">{session?.name[ 0 ]}</Avatar>
            <Text>{session?.name}</Text>
          </HStack>

          <Pressable onPress={handleLogOut}>
            <Icon
              mr={3} size={8}
              color="danger.500"
              as={<Ionicons name="log-out-outline" />}
            />
          </Pressable>
        </HStack>

        <Heading textAlign="center" mt={20} color="gray.700">Welcome to APP</Heading>
        <Text textAlign="center" color="gray.500">I hope you enjoy!</Text>

        <Fab
          size="lg"
          right={8}
          shadow={4}
          bottom={10}
          colorScheme="danger"
          renderInPortal={false}
          onPress={() => navigation.navigate("Chat")}
          icon={
            <Icon
              size={10}
              color="white"
              as={<Ionicons name="chatbubbles-outline" />}
            />
          }
        />
      </Box>
    </SafeAreaView>
  );
}