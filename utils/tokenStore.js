import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY_NAME = 'token';

export const storeToken = (token) => {
  SecureStore.setItemAsync(TOKEN_KEY_NAME, JSON.stringify(token));
}

export const getToken = async () => {
  const token = await SecureStore.getItemAsync(TOKEN_KEY_NAME);
  return JSON.parse(token);
}

export const removeToken = () => {
  SecureStore.deleteItemAsync(TOKEN_KEY_NAME);
}