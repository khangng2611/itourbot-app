import { Stack, Redirect } from 'expo-router';
import { useAuth, TourContext } from '../../components/context';
import useFetch from '../../hook/useFetch';
import { useContext, useEffect } from 'react';
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

function Layout() {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="/(auth)/Login" />;
  }
  const { setTourInfo, setAllowListen } = useContext(TourContext);
  const { data } = useFetch('tours/current', {});
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
