import { createContext, useContext } from 'react';
// import { useStorageState } from './useStorageState';
import { useStorageState } from '../../utils/asyncStorage';

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
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
  const { session, setSession } = useStorageState();

  return (
    <AuthContext.Provider value={{
      signIn: (data) => {
        setSession(data);
      },
      signOut: () => {
        setSession(null);
      },
      session,
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
