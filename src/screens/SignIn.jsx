import { useState } from "react";
import {
  Box,
  Icon,
  Text,
  Input,
  Stack,
  Button,
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
          <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
          >
            <Heading>LOGO</Heading>
          </Box>

          <Box
            bg="white"
            paddingX={8}
            paddingY={10}
            borderTopRadius={20}
          >
            <Box marginBottom={5}>
              <Heading size="lg" color="gray.700">Sign in now</Heading>
              <Text color="gray.500">Please login to continue</Text>
            </Box>

            <Stack space={4} w="100%" alignItems="center">
              <Input
                mb={3}
                size="lg"
                placeholder="Email"
                variant="underlined"
                borderColor={"gray.400"}
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
                borderColor={"gray.400"}
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
              color="blue.500"
              textAlign="right"
              textDecorationLine="underline"
            >
              Forgot Password?
            </Text>

            <Button bg="gray.700" marginY={5}>SIGN IN</Button>

            <Text textAlign="center">
              New user? <Text textDecorationLine="underline" color="blue.500">Sign up</Text>
            </Text>

          </Box>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}