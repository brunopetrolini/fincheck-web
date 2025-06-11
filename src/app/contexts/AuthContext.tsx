import { useQuery } from '@tanstack/react-query';
import { createContext, type ReactNode, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { PageLoader } from '@/ui/components/PageLoader';

import { localStorageKeys } from '../config/local-storage-keys';
import { UsersService } from '../services/UsersService';

type AuthContextValue = {
  signedIn: boolean;
  signIn(accessToken: string): void;
  signOut(): void;
};

const AuthContext = createContext({} as AuthContextValue);

function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => UsersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  useEffect(() => {
    if (isError) {
      signOut();
      toast.error('Sua sessão expirou. Faça login novamente.');
    }
  }, [isError, signOut]);

  if (!isFetching) return <PageLoader />;

  return (
    <AuthContext.Provider value={{ signedIn: isSuccess && signedIn, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
