import { useState } from "react";
import {
  Box,
  Icon,
  Text,
  Input,
  Stack,
  Toast,
  Alert,
  Button,
  Center,
  VStack,
  Heading,
  Pressable,
  FormControl,
  WarningOutlineIcon,
  KeyboardAvoidingView,
} from "native-base";
import BG from "../../assets/images/BG.png";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { auth, database } from "../config/firebase";
import { Controller, useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function SignUp({ navigation }) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showPass, setShowPass ] = useState(false);
  const [ showPassConfirm, setShowPassConfirm ] = useState(false);

  const { control, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' }
  });

  const handleSignUp = data => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then((userCredencial) => {
        //  Signed in
        const user = userCredencial?.user;
        //  Registering the user in Firestore
        addDoc(collection(database, "users"), {
          uid: user?.uid,
          name: data?.name,
          email: data?.email,
        });
        // Success Toast!
        Toast.show({
          render: () => (
            <Alert w="100%" variant="top-accent" status="success">
              <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <Alert.Icon size="md" />
                <Text fontSize="md" fontWeight="medium">
                  Account created!
                </Text>
                <Text textAlign="center">
                  Congratulations, your account has been successfully created! Login now!
                </Text>
              </VStack>
            </Alert>
          )
        });
        //  Navigate to SignIn
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        // Error Toast
        Toast.show({
          render: () => (
            <Alert w="100%" variant="top-accent" status="error">
              <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <Alert.Icon size="md" />
                <Text fontSize="md" fontWeight="medium">
                  Oops! Something went wrong.
                </Text>
                <Text textAlign="center">
                  An unexpected error has occurred. Try again later.
                </Text>
              </VStack>
            </Alert>
          )
        });

        console.error(errorCode, errorMessage);
      }).finally(() => setIsLoading(false));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView flex={1}>
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
            <Heading size="lg" color="danger.500">Sign up now</Heading>
            <Text marginBottom={5} color="gray.500">Please register to continue</Text>

            <Stack w="100%" alignItems="center">
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required." }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl isRequired isInvalid={errors?.name} mb={3}>
                    <Stack>
                      <Input
                        size="lg"
                        value={value}
                        onBlur={onBlur}
                        variant="underlined"
                        placeholder="Username"
                        borderColor="gray.400"
                        onChangeText={onChange}
                        InputLeftElement={
                          <Icon
                            mr={3} size={5}
                            as={<Ionicons name="person-outline" />}
                            color={errors?.name ? "danger.500" : "gray.600"}
                          />
                        }
                      />

                      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors?.name?.message}
                      </FormControl.ErrorMessage>
                    </Stack>
                  </FormControl>
                )}
              />

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
                            as={<Ionicons name="mail-outline" />}
                            color={errors?.email ? "danger.500" : "gray.600"}
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

              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: "Please confirm the password.",
                  validate: {
                    confirmation: v => {
                      if (v !== getValues("password")) return "Passwords must be the same";
                    }
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl isRequired isInvalid={errors?.confirmPassword} mb={3}>
                    <Stack>
                      <Input
                        size="lg"
                        value={value}
                        onBlur={onBlur}
                        variant="underlined"
                        borderColor="gray.400"
                        onChangeText={onChange}
                        placeholder="Confirm Password"
                        type={showPassConfirm ? "text" : "password"}
                        InputLeftElement={
                          <Icon
                            mr={3} size={5}
                            as={<Ionicons name="lock-closed-outline" />}
                            color={errors?.confirmPassword ? "danger.500" : "gray.600"}
                          />
                        }
                        InputRightElement={
                          <Pressable onPress={() => setShowPassConfirm(!showPassConfirm)}>
                            <Icon
                              ml={3} size={5}
                              color={errors?.confirmPassword ? "danger.500" : "gray.600"}
                              as={
                                <Ionicons
                                  name={showPassConfirm ? "eye-outline" : "eye-off-outline"}
                                />
                              }
                            />
                          </Pressable>
                        }
                      />

                      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors?.confirmPassword?.message}
                      </FormControl.ErrorMessage>
                    </Stack>
                  </FormControl>
                )}
              />
            </Stack>

            <Button
              marginY={5}
              bg="danger.500"
              colorScheme="danger"
              disabled={isLoading}
              isLoading={isLoading}
              onPress={handleSubmit(handleSignUp)}
            >
              SIGN UP
            </Button>

            <Text textAlign="center">
              {"Already user? "}
              <Text
                color="danger.500"
                textDecorationLine="underline"
                onPress={() => navigation.navigate("SignIn")}
              >
                Sign in
              </Text>
            </Text>
          </Box>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}