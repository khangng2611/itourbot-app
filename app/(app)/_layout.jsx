import { Stack, Redirect, useRouter } from 'expo-router';
import { useAuth } from '../../utils/ctx';
import { Loader } from '../../components';
import { checkLastLogin } from '../../utils/asyncStorage';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  const { session, isLoading } = useAuth();
  if (isLoading) return <Loader visible={isLoading} />;
  if (!checkLastLogin(session)) {
    return <Redirect href="/(auth)/Login" />;
  }
  return (
    <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
}

export default Layout;
