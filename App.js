import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { SignIn } from './src/screens';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Box flex={1} alignItems="center" justifyContent="center" bg="red.400" >Hello world</Box> */}
      
      <SignIn />

      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
