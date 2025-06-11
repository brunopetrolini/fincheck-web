import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, type ReactNode, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { LaunchScreen } from '@/ui/components/LaunchScreen';

import { localStorageKeys } from '../config/local-storage-keys';
import { reactQueryKeys } from '../config/react-query-keys';
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
    queryKey: reactQueryKeys.ME,
    queryFn: () => UsersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const queryClient = useQueryClient();

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries({ queryKey: reactQueryKeys.ME });
    setSignedIn(false);
  }, [queryClient]);

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

  return (
    <AuthContext.Provider value={{ signedIn: isSuccess && signedIn, signIn, signOut }}>
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
