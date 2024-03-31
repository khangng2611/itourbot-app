import { Stack } from 'expo-router';
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

function Layout() {
  return (
    <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
}

export default Layout;
