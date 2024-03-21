import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../login/index";
import Profile from "../profile/index";
import Register from "../register/index";
import Onboarding from "../onboarding";
import Home from "../Home";



const PublicRoute = () => {
    return (
        <div>

            <Routes>


                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='/login'
                    element={<Login />}
                />


                <Route
                    path='/verify-user/:id'
                    element={<Profile />}
                />

                <Route
                    path='/register'
                    element={<Register />}
                />

                <Route
                    path="/onboarding"
                    element={<Onboarding />} 
                />
                    





            </Routes>

        </div>

    );
};

export default PublicRoute;