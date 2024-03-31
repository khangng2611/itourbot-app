import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
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

const checkLastLogin = (lastLogin) => {
  if (!lastLogin) return false;
  if (parseInt(lastLogin) < (Date.now() - (24 * 60 * 60 * 1000))) return false;
  return true;
};

const useStorageState = () => {
  const [isLoading, setLoading] = useState(false);
  const [{ accessKey, userData, lastLogin }, setSession] = useState({});
  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      const [accessKey, userData, lastLogin] = await Promise.all([
        localRetrieve('ACCESS_KEY'),
        localRetrieve('USER'),
        localRetrieve('LAST_LOGIN')
      ]);
      setSession({ accessKey, userData, lastLogin });
      setLoading(false);
    };
    fetchSession();
  }, []);
  // return [[isLoading, session], setSession];
  return { accessKey, userData, lastLogin, isLoading };
}

const removeSession = async () => {
  await Promise.all([
    localRemove('ACCESS_KEY'),
    localRemove('USER'),
    localRemove('LAST_LOGIN')
  ]);
}

export {
  localStore, localRetrieve, localRemove, checkLastLogin, useStorageState, removeSession
};
