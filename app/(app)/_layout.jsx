import { Stack, Redirect, useRouter, Tabs } from 'expo-router';
import { useAuth } from '../../components/context/AuthContext';
import { Loader } from '../../components';
import { checkLastLogin } from '../../utils/asyncStorage';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  const { session } = useAuth();

  // if (isLoading) return <Loader visible={isLoading} />;
  if (!checkLastLogin(session)) {
    return <Redirect href="/(auth)/Login" />;
  }
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ animation: 'default', headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
export default Layout;
