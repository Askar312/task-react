import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import EditUser from './components/EditUser'
import CountList from './components/CountList';
import Recepts from './components/Recepts';




const MainRoutes = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                
                <Route path='/rec' element={<Recepts />} />
                <Route path='/count' element={<CountList />} />
                <Route path='/add' element={<AddUser />} />
                <Route path='/list' element={<UserList/>} />
                <Route path='/edit' element={<EditUser/>} />
                
                
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default MainRoutes;