import { SplashScreen, Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import DMBold from '../assets/fonts/DMSans-Bold.ttf';
import DMMedium from '../assets/fonts/DMSans-Medium.ttf';
import DMRegular from '../assets/fonts/DMSans-Regular.ttf';
import { AuthProvider } from '../utils/ctx';
import { useState, useEffect } from 'react';
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: '(app)',
// };

function RootLayout() {
  const [fontsLoaded] = useFonts({ DMBold, DMMedium, DMRegular });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  // Set up the auth context and render our layout inside of it.
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}

export default RootLayout;