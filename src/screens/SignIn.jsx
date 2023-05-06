import { useContext, useState } from "react";
import {
  Box,
  Icon,
  Text,
  Input,
  Stack,
  Alert,
  Toast,
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
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { Controller, useForm } from "react-hook-form";
import { SessionContext } from "../config/SessionContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignIn({ navigation }) {
  const [ showPass, setShowPass ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const [ session, setSession ] = useContext(SessionContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '' }
  });

  const handleSignIn = data => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then(async (userCredencial) => {
        //  Signed in
        const authUser = userCredencial?.user;

        //  Getting the user reference
        const userRef = doc(database, "users", authUser.uid);
        //  Getting the user data
        const userDoc = await getDoc(userRef);

        //  Save user session in Context
        setSession(userDoc.data());

        //  Navigate to Home
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error?.code;
        // const errorMessage = error?.message;

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
                  {errorCode}
                </Text>
              </VStack>
            </Alert>
          )
        });
      }).finally(() => setIsLoading(false));
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
              disabled={isLoading}
              isLoading={isLoading}
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