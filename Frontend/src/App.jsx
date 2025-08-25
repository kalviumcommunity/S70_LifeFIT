import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import GoalsPage from './pages/GoalsPage';
import RegisterPage from './pages/RegisterPage';
import JournalPage from './pages/JournalPage';

function App() {

  return (
   <React.StrictMode>
    <BrowserRouter> 
    <Routes>

    <Route path="/" element={<DashboardPage />} />
    <Route path='/login' element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>} />
    <Route path="/goals" element={<GoalsPage />} />
      <Route path="/Journal" element={<JournalPage/>} />

</Routes>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
