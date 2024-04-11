import { SplashScreen, Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import DMBold from '../assets/fonts/DMSans-Bold.ttf';
import DMMedium from '../assets/fonts/DMSans-Medium.ttf';
import DMRegular from '../assets/fonts/DMSans-Regular.ttf';
import { useEffect } from 'react';
import { AuthProvider, TourProvider, DataProvider } from '../components/context';

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
      <TourProvider>
        <DataProvider>
          <Slot />
        </DataProvider>
      </TourProvider>
    </AuthProvider>
  );
}

export default RootLayout;