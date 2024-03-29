import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import DMBold from '../assets/fonts/DMSans-Bold.ttf';
import DMMedium from '../assets/fonts/DMSans-Medium.ttf';
import DMRegular from '../assets/fonts/DMSans-Regular.ttf';
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '/Home',
};

function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold,
    DMMedium,
    DMRegular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
}

export default Layout;
