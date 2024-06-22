import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage.tsx';
import MainPage from './MainPage.tsx';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProvider from './hooks/UserProvider.tsx';
import useUser from './hooks/useUser.ts';

const queryClient = new QueryClient();

const Router = () => {
  const { me } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        {me ? (
          <>
            <Route index element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/user/join" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/user/join" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
