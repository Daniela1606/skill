import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../login/index";
import Profile from "../profile/index";
import Register from "../register/index";
import Onboarding from "../onboarding";
/* import Home from "../Home";
 */import Status from "../adminStatus/index";
 import AppMenuLogin from "../logueado/index";
 import ProfileUser from "../profileUser/index";
import AppProfileUser from "../profileUser/index";



const PublicRoute = () => {
    return (
        <div>

            <Routes>


{/*                 <Route
                    path='/'
                    element={<Home />}
                /> */}

                <Route
                    path='/'
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

                <Route
                    path="/status"
                    element={<Status />} 
                />



                <Route
                    path="/menu/:id"
                    element={<AppMenuLogin />} 
                />
                             
                 <Route
                    path="/profile-user"
                    element={<AppProfileUser />} 
                />
                                 

                    
                    





            </Routes>

        </div>

    );
};

export default PublicRoute;