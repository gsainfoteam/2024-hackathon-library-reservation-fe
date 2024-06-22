import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useUser from './hooks/useUser';

const LoginPage = () => {
  const SCOPES = [
    {
      field: 'redirect_uri',
      value: `${import.meta.env.VITE_PUBLIC_BASE_URL}/user/join`,
    },
    { field: 'client_id', value: 'library_reservation' },
    { field: 'scope', value: 'openid profile email student_id offline_access' },
    { field: 'response_type', value: 'code' },
    { field: 'prompt', value: 'consent' },
  ];

  const [searchParams] = useSearchParams();
  const authCode = searchParams.get('code');
  const { login } = useUser();

  useEffect(() => {
    if (!authCode) return;
    login(authCode);
  }, [authCode, login]);

  return (
    <form action={'https://idp.gistory.me/authorize'}>
      {SCOPES.map((scope) => {
        return (
          <input
            key={scope.field}
            name={scope.field}
            value={scope.value}
            type={'hidden'}
          />
        );
      })}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
