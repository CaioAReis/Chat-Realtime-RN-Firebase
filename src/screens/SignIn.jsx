import { useState } from "react";
import {
  Box,
  Icon,
  Text,
  Input,
  Stack,
  Button,
  Center,
  Heading,
  Pressable,
  KeyboardAvoidingView,
} from "native-base";
import BG from "../../assets/images/BG.png";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignIn() {
  const [ showPass, setShowPass ] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1} behavior="">
        <ImageBackground style={{ flex: 1 }} source={BG}>
          <Center flex={1}>
            <Heading>LOGO</Heading>
          </Center>

          <Box
            bg="white"
            paddingX={8}
            paddingY={10}
            borderTopRadius={20}
          >
            <Heading size="lg" color="danger.500">Sign in now</Heading>
            <Text marginBottom={5} color="gray.500">Please login to continue</Text>

            <Stack space={4} w="100%" alignItems="center">
              <Input
                mb={3}
                size="lg"
                placeholder="Email"
                variant="underlined"
                borderColor="gray.400"
                focusOutlineColor="gray.700"
                InputLeftElement={
                  <Icon
                    mr={3} size={5} color="gray.700"
                    as={<Ionicons name="mail-outline" />}
                  />
                }
              />

              <Input
                size="lg"
                placeholder="Senha"
                variant="underlined"
                borderColor="gray.400"
                focusOutlineColor="gray.700"
                type={showPass ? "text" : "password"}
                InputLeftElement={
                  <Icon
                    mr={3} size={5} color="gray.600"
                    as={<Ionicons name="lock-closed-outline" />}
                  />
                }
                InputRightElement={
                  <Pressable onPress={() => setShowPass(!showPass)}>
                    <Icon
                      ml={3} size={5} color="gray.600"
                      as={<Ionicons name={showPass ? "eye-outline" : "eye-off-outline"} />}
                    />
                  </Pressable>
                }
              />
            </Stack>

            <Text
              marginY={4}
              textAlign="right"
              color="danger.500"
              textDecorationLine="underline"
            >
              Forgot Password?
            </Text>

            <Button bg="danger.500" marginY={5}>SIGN IN</Button>

            <Text textAlign="center">
              New user? <Text textDecorationLine="underline" color="danger.500">Sign up</Text>
            </Text>
          </Box>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}