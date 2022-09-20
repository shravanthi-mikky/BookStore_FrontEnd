import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookView from '../Components/BookView/BookView';
import Cart from '../Components/Cart/Cart';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';


function RouterComponent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<DashBoard/>}></Route>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
                    <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
                    <Route path='/BookView' element={<BookView/>}></Route>
                    <Route path='/Cart' element={<Cart/>}></Route>
                    <Route path='/Header' element={<Header/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default RouterComponent
