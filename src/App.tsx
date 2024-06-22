import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.tsx';
import MainPage from './MainPage.tsx';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProvider from './hooks/UserProvider.tsx';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/join" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
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
