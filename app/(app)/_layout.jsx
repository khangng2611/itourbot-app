import { Stack, Redirect, useRouter } from 'expo-router';
import { useAuth } from '../../utils/ctx';
import { Loader } from '../../components';
import { checkLastLogin } from '../../utils/asyncStorage';
import { isReachStation } from '../../hook/firebaseFetch';
import { useEffect } from 'react';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  // console.log("load Layout");
  const { session, isLoading } = useAuth();
  // const  [listening] = isReachStation();
  // console.log("listening: ", listening);
  // useEffect(() => {
  //     if (listening) {
  //       Alert.alert('Robot has reached your destination');
  //     }
  // }, [listening]);
  
  if (isLoading) return <Loader visible={isLoading} />;
  if (!checkLastLogin(session)) {
    return <Redirect href="/(auth)/Login" />;
  }
  return (
    <Stack initialRouteName="Home" screenOptions={{ animation: 'none', headerShown: false }}>
      <Stack.Screen name="Home" />
      <Stack.Screen name="Map" />
    </Stack>
  );
}

export default Layout;
