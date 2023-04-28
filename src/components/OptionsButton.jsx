import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Box, Center, HStack, Icon, IconButton, Stagger, useDisclose } from "native-base";

export function OptionsButton() {

  const { isOpen, onToggle } = useDisclose();

  return (
    <Center position="absolute" bottom={3} left={2} >
      <Box alignItems="center" minH="220">
        <Stagger visible={isOpen}
          // w="full" zIndex={30}
          initial={{ opacity: 0, scale: 0, translateY: 34 }}
          animate={{
            scale: 1,
            opacity: 1,
            translateY: 0,
            transition: {
              mass: 0.3,
              type: "spring",
              stagger: { offset: 30, reverse: true }
            }
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
            translateY: 34,
            transition: {
              duration: 100,
              stagger: { offset: 30, reverse: true }
            }
          }}>

          <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="location-pin" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />

          <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="microphone" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="video" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="photo-library" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
        </Stagger>
      </Box>

      <HStack alignItems="center">
        <IconButton
          size="lg"
          // onPress={onToggle}
          borderRadius="full"
          colorScheme="danger"
          icon={
            <Icon
              size="6"
              as={Ionicons}
              name="attach"
              color="gray.400"

              _dark={{
                color: "warmGray.50"
              }}
            />
          }
        />
      </HStack>
    </Center>

  );
}