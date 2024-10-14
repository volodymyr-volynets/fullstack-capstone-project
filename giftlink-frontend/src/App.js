import React from 'react';
import { Routes, Route /*, useNavigate*/ } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';
import SearchPage from './components/SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  //const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/app" exact element={<MainPage />} />
            <Route path="/app/login" exact element={<LoginPage/>} />
            <Route path="/app/register" exact element={<RegisterPage />} />
            <Route path="/app/profile" exact element={<Profile />} />
            <Route path="/app/search" exact element={<SearchPage/>} />
            <Route path="/app/product/:productId" exact element={<DetailsPage />} />
            <Route path="/app/search" exact element={<SearchPage/>} />
        </Routes>
        </>
  );
}
export default App;