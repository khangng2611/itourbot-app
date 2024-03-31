import { createContext, useContext } from 'react';
// import { useStorageState } from './useStorageState';
import { useStorageState } from './asyncStorage';

const AuthContext = createContext({
  // signIn: () => null,
  // signOut: () => null,
  lastLogin: null,
  userData: null,
  accessKey: null,
  isLoading: false,
});

export function useAuth() {
  const value = useContext(AuthContext);
  // if (process.env.NODE_ENV !== 'production') {
  //   if (!value) {
  //     throw new Error('useSession must be wrapped in a <SessionProvider />');
  //   }
  // }
  return value;
}

export function AuthProvider(props) {
  // const [[isLoading, session], setSession] = useStorageState('session');
  const {accessKey, userData, lastLogin, isLoading} = useStorageState();

  return (
    <AuthContext.Provider value={{
      // signIn: (data) => {
      //   setSession(data);
      // },
      // signOut: () => {
      //   setSession(null);
      // },
      lastLogin,
      isLoading,
      userData,
      accessKey,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}
