import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';


function RouterComponent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<DashBoard/>}></Route>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default RouterComponent
