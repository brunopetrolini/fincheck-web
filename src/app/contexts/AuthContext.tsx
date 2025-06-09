import { createContext, type ReactNode, useCallback, useState } from 'react';

import { localStorageKeys } from '../config/local-storage-keys';

type AuthContextValue = {
  signedIn: boolean;
  signIn(accessToken: string): void;
};

const AuthContext = createContext({} as AuthContextValue);

function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storedAccessToken;
  });

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  return <AuthContext.Provider value={{ signedIn, signIn }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
