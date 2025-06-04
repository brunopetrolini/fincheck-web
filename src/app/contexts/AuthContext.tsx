import { createContext, type ReactNode, useCallback, useState } from 'react';

type AuthContextValue = {
  signedIn: boolean;
  signIn(): void;
};

const AuthContext = createContext({} as AuthContextValue);

function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = useCallback(() => {
    setSignedIn(true);
  }, []);

  return <AuthContext.Provider value={{ signedIn, signIn }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
