import { Stack, useRouter, SplashScreen, Redirect } from 'expo-router';
import { useFonts } from 'expo-font';
import DMBold from '../assets/fonts/DMSans-Bold.ttf';
import DMMedium from '../assets/fonts/DMSans-Medium.ttf';
import DMRegular from '../assets/fonts/DMSans-Regular.ttf';
import { checkLastLogin } from '../utils/asyncStorage';
import { useState, useEffect } from 'react';
import Login from './(auth)/Login';
import AuthLayout from './(auth)/_layout';
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(auth)',
};

function RootLayout() {
  // const router = useRouter();
  const [fontsLoaded] = useFonts({ DMBold, DMMedium, DMRegular });
  // useEffect(() => {
  //   checkLastLogin().then((res) => {
  //     setLoggedIn(res);
  //   });
  // }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    // <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
    <Stack screenOptions={{ animation: 'none', headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;