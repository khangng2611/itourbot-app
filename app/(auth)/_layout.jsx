import { Stack} from 'expo-router';

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  return (
    <Stack initialRouteName="Login" screenOptions={{ animation: 'default', headerShown: false }}>
      <Stack.Screen name="Login" />
    </Stack>
  );
}
export default Layout;
