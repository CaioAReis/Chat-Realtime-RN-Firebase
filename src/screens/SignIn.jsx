import { Box, Button, Heading, Icon, Input, Pressable, Stack, Text } from "native-base";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


export function SignIn() {
  const [ showPass, setShowPass ] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1}>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
        // borderWidth={1}
        // borderColor={"red.500"}
        >
          <Heading>LOGO</Heading>
        </Box>

        <Box
          paddingX={8}
          paddingY={10}
          bg="green.300"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
        >
          <Box marginBottom={5}>
            <Heading size="lg" color="gray.700">Sign in now</Heading>
            <Text color="gray.400">Please login to continue</Text>
          </Box>

          <Stack space={4} w="100%" alignItems="center">
            <Input
              mb={3}
              size="lg"
              placeholder="Email"
              variant="underlined"
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
            color="blue.700"
            textAlign="right"
            textDecorationLine="underline"
          >
            Forgot Password?
          </Text>

          <Button bg="gray.700" marginY={5}>SIGN IN</Button>

          <Text textAlign="center">
            New user? <Text textDecorationLine="underline" color="blue.700">Sign up</Text>
          </Text>

        </Box>
      </Box>
    </SafeAreaView>
  );
}