import AsyncStorage from '@react-native-async-storage/async-storage';

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

const checkLastLogin = async () => {
  const lastLogin = await localRetrieve('LAST_LOGIN');
  if (!lastLogin) return false;
  if  (parseInt(lastLogin) < (Date.now() - (24 * 60 * 60 * 1000))) return false;
  return true;
};

export {
  localStore, localRetrieve, localRemove, checkLastLogin,
};
