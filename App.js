import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Chat, Home, SignIn, SignUp } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackRoutes />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
