import { Stack, Redirect, useRouter, Tabs } from 'expo-router';
import { useAuth } from '../../components/context/AuthContext';
import { TourContext } from '../../components/context/TourContext';
import { Loader } from '../../components';
import { checkLastLogin } from '../../utils/asyncStorage';
import useFetch from '../../hook/useFetch';
import { useContext, useEffect } from 'react';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  const { session } = useAuth();
  // if (isLoading) return <Loader visible={isLoading} />;
  if (!checkLastLogin(session)) {
    return <Redirect href="/(auth)/Login" />;
  }
  const { setTourInfo, setAllowListen } = useContext(TourContext);
  const { data } = useFetch('tours/current', {}, session);
  useEffect(() => {
    if (data._id) {
      setTourInfo(data);
      setAllowListen(true);
    };
  }, [data]);
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ animation: 'default', headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
export default Layout;
