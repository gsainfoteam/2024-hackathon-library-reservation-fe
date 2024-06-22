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
      {me ? (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/user/join" element={<LoginPage />} />
          <Route element={<Navigate to="/user/join" />} />
        </Routes>
      )}
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
