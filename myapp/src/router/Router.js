import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../pages/login/PageLogin";
import PageForgot from "../pages/login/PageForgot";
import Home from "../pages/login/Home";
import Infor from "../pages/infor/Infor";
import ChartDashBoard from "../pages/dashboard/ChartDashBoard";

import ServiceManager from "../pages/service/semanager";

const Router = () => {
    return (
        <div className="grid wide">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="dashboard" element={<ChartDashBoard />} ></Route>
                    <Route path="infor" element={<Infor />}></Route>
                    <Route path="equipment" element={<ChartDashBoard />}></Route>
                    <Route path="service" element={<ServiceManager />}></Route>
                </Route>
                <Route path="login" element={<PageLogin />}></Route>
                <Route path="forgotPass" element={<PageForgot />}></Route>
                <Route path="newPass" element={<PageForgot restpass />} />
            </Routes>
        </div>
    );
};

export default Router;
