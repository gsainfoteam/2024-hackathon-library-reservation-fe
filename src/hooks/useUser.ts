import { createContext, useCallback, useContext } from 'react';
import { login } from '../api/auth';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '../api/reservation';

export const useUserProvider = () => {
  const {
    data: me,
    refetch,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getMe,
    retry: false,
  });

  const handleLogin = useCallback(
    async (code: string) => {
      const token = await login(code);
      localStorage.setItem('accessToken', token);
      refetch();
    },
    [refetch],
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem('accessToken');
    refetch();
  }, [refetch]);

  return { login: handleLogin, me: error ? null : me, logout: handleLogout };
};

export const userContext = createContext<ReturnType<
  typeof useUserProvider
> | null>(null);

const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default useUser;
