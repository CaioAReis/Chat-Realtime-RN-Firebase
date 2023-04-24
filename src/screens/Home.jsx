import { Ionicons } from "@expo/vector-icons";
import { Avatar, Box, Center, Fab, HStack, Heading, Icon, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


export function Home() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1}>
        <HStack alignItems="center" space={3} p={3}>
          <Avatar bg="danger.600">CA</Avatar>
          <Text>Caio AReis</Text>
        </HStack>

        <Heading textAlign="center" mt={20} color="gray.700">Welcome to APP</Heading>
        <Text textAlign="center" color="gray.500">I hope you enjoy!</Text>

        <Fab
          size="lg"
          right={8}
          shadow={4}
          bottom={10}
          borderWidth={3}
          colorScheme="danger"
          renderInPortal={true}
          borderColor="danger.700"
          onPress={() => alert("AOISJDOIS")}
          icon={
            <Icon
              color="white"
              as={<Ionicons name="chatbubbles-outline" />}
            />
          }
        />
      </Box>
    </SafeAreaView>
  );
}