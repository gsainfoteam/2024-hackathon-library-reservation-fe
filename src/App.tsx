import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage.tsx'
import MainPage from './MainPage.tsx'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App
