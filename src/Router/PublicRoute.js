import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../login/index";
import Profile from "../profile/index";
import Register from "../register/index";



const PublicRoute = () => {
    return (
        <div>

            <Routes>


                <Route
                    path='/login'
                    element={<Login />}
                />


                <Route
                    path='/profile'
                    element={<Profile />}
                />

                <Route
                    path='/register'
                    element={<Register />}
                />





            </Routes>

        </div>

    );
};

export default PublicRoute;