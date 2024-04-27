import { createContext, useContext } from 'react';
import { storeToken, removeToken } from '../../utils/tokenStore';
import { useState } from 'react';

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  user: null,
  // isLoading: false,
});

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{
      signIn: (session) => {
        setUser(session.user);
        storeToken({
          ...session.token,
          email: session.user.email
        });
      },
      signOut: () => {
        setUser(null);
        removeToken();
      },
      user,
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
