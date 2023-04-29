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
  FormControl,
  WarningOutlineIcon,
  KeyboardAvoidingView,
} from "native-base";
import { auth } from "../config/firebase";
import BG from "../../assets/images/BG.png";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignIn({ navigation }) {
  const [ showPass, setShowPass ] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '' }
  });

  const handleSignIn = data => {

    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then((userCredencial) => {
        //  Signed in
        const user = userCredencial?.user;
        console.warn(user);
        //  ...
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        console.error(errorCode);
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1} behavior="">
        <ImageBackground style={{ flex: 1 }} source={BG}>
          <Center flex={1}>
            <Heading bg="white" w="full" textAlign="center" py={2}>LOGO</Heading>
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
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required." }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl isRequired isInvalid={errors?.email} mb={3}>
                    <Stack>
                      <Input
                        size="lg"
                        value={value}
                        onBlur={onBlur}
                        placeholder="Email"
                        variant="underlined"
                        borderColor="gray.400"
                        onChangeText={onChange}
                        InputLeftElement={
                          <Icon
                            mr={3} size={5}
                            color={errors?.email ? "danger.500" : "gray.600"}
                            as={<Ionicons name="mail-outline" />}
                          />
                        }
                      />

                      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors?.email?.message}
                      </FormControl.ErrorMessage>
                    </Stack>
                  </FormControl>
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required." }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl isRequired isInvalid={errors?.password} mb={3}>
                    <Stack>
                      <Input
                        size="lg"
                        value={value}
                        onBlur={onBlur}
                        variant="underlined"
                        placeholder="Password"
                        borderColor="gray.400"
                        onChangeText={onChange}
                        type={showPass ? "text" : "password"}
                        InputLeftElement={
                          <Icon
                            mr={3} size={5}
                            as={<Ionicons name="lock-closed-outline" />}
                            color={errors?.password ? "danger.500" : "gray.600"}
                          />
                        }
                        InputRightElement={
                          <Pressable onPress={() => setShowPass(!showPass)}>
                            <Icon
                              ml={3} size={5}
                              color={errors?.password ? "danger.500" : "gray.600"}
                              as={<Ionicons name={showPass ? "eye-outline" : "eye-off-outline"} />}
                            />
                          </Pressable>
                        }
                      />

                      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors?.password?.message}
                      </FormControl.ErrorMessage>
                    </Stack>
                  </FormControl>
                )}
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

            <Button
              marginY={5}
              bg="danger.500"
              colorScheme="danger"
              onPress={handleSubmit(handleSignIn)}
            >
              SIGN IN
            </Button>

            <Text textAlign="center">
              {"New user? "}
              <Text
                color="danger.500"
                textDecorationLine="underline"
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign up
              </Text>
            </Text>
          </Box>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}