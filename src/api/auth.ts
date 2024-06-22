import api from '.';

export const login = (code: string) =>
  api
    .get<{ access_token: string }>('user/login', {
      params: { code, type: import.meta.env.DEV ? 'local' : 'web' },
    })
    .then((res) => res.data.access_token);
