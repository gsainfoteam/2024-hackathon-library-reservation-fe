import { useUserProvider, userContext } from './useUser';

const UserProvider = ({ children }: React.PropsWithChildren) => {
  const value = useUserProvider();
  return <userContext.Provider value={value} children={children} />;
};

export default UserProvider;
