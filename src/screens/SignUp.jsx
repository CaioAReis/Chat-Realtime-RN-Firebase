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

export function SignUp() {
  const [ showPass, setShowPass ] = useState(false);
  const [ showPassConfirm, setShowPassConfirm ] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>
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
            <Heading size="lg" color="danger.500">Sign up now</Heading>
            <Text marginBottom={5} color="gray.500">Please register to continue</Text>

            <Stack space={4} w="100%" alignItems="center">
              <Input
                mb={3}
                size="lg"
                variant="underlined"
                placeholder="Username"
                borderColor={"gray.400"}
                focusOutlineColor="gray.700"
                InputLeftElement={
                  <Icon
                    mr={3} size={5} color="gray.700"
                    as={<Ionicons name="person-outline" />}
                  />
                }
              />

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
                mb={3}
                size="lg"
                variant="underlined"
                placeholder="Password"
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

              <Input
                mb={6}
                size="lg"
                variant="underlined"
                borderColor={"gray.400"}
                focusOutlineColor="gray.700"
                placeholder="Confirm Password"
                type={showPassConfirm ? "text" : "password"}
                InputLeftElement={
                  <Icon
                    mr={3} size={5} color="gray.600"
                    as={<Ionicons name="lock-closed-outline" />}
                  />
                }
                InputRightElement={
                  <Pressable onPress={() => setShowPassConfirm(!showPassConfirm)}>
                    <Icon
                      ml={3} size={5} color="gray.600"
                      as={<Ionicons name={showPassConfirm ? "eye-outline" : "eye-off-outline"} />}
                    />
                  </Pressable>
                }
              />
            </Stack>

            <Button bg="danger.500" marginY={5}>SIGN UP</Button>

            <Text textAlign="center">
              Already user? <Text textDecorationLine="underline" color="danger.500">Sign in</Text>
            </Text>
          </Box>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}