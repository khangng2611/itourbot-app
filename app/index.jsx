import { Redirect, useRootNavigationState } from 'expo-router';
import RootLayout from './_layout';
import { checkLastLogin } from '../utils/asyncStorage';
import { useState, useEffect } from 'react';

export default function Index() {
  const rootNavigationState = useRootNavigationState();
  return <RootLayout />;
  // const [loggedIn, setLoggedIn] = useState()
  // useEffect(() => {
  //   checkLastLogin().then((res) => {
  //     setLoggedIn(res);
  //   });
  // }, []);
  if (!rootNavigationState?.key) return;
  const loggedIn = checkLastLogin();
  if (!loggedIn) {
    return <Redirect href={'/(auth)'} />;    
    // // router.replace('/(auth)/Login')
    // // return <Login/> ;
    // return (
    //   <Stack screenOptions={{ animation: 'none', headerShown: false }}>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   </Stack>
    // );
  }
  return <Redirect href="/(auth)/Login" />;
}
