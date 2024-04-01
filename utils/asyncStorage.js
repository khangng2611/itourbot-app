import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const localStore = async (key, token) => {
  try {
    // **WARNING:** Data is stored unencrypted! Consider encryption for sensitive tokens.
    await AsyncStorage.setItem(key, token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

const localRetrieve = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

const localRemove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

const checkLastLogin = (session) => {
  if (!session) return false;
  if (!session.lastLogin) return false;
  if (parseInt(session.lastLogin, 10) < (Date.now() - (24 * 60 * 60 * 1000))) return false;
  return true;
};

const useStorageState = () => {
  const [session, setSession] = useState();
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchSession = async () => {
  //     setLoading(true);
  //     setLoading(false);
  //   };
  //   fetchSession();
  // }, []);
  // return { session, isLoading, setSession };
  return { session, setSession };
};

export {
  localStore, localRetrieve, localRemove, checkLastLogin, useStorageState,
};
