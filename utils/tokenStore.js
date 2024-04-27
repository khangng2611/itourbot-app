import * as SecureStore from 'expo-secure-store';

export const storeToken = (token) => {
  SecureStore.setItemAsync('token', JSON.stringify(token));
}

export const getToken = async () => {
  const token = await SecureStore.getItemAsync('token');
  return JSON.parse(token);
}

export const removeToken = () => {
  SecureStore.deleteItemAsync('token');
}