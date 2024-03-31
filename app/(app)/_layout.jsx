import { Stack, Redirect } from 'expo-router';
import { useAuth } from '../../utils/ctx';
import { Loader } from '../../components';
import { checkLastLogin } from '../../utils/asyncStorage';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  const { lastLogin, isLoading } = useAuth();
  if (isLoading) return <Loader visible={isLoading} />;
  console.log('lastLogin', lastLogin);
  if (!checkLastLogin(lastLogin)) {
    return <Redirect href="/(auth)/Login" />;
  }
  return (
    <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
}

export default Layout;
