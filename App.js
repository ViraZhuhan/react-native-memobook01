import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
// import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
      {/* <RegistrationScreen/> */}
      {/* <LoginScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
