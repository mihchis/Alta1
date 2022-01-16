import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../pages/login/PageLogin";
import PageForgot from "../pages/login/PageForgot";
import Home from "../pages/information/Home";
import Info from "../pages/information/Infor";
import ChartDashBoard from "../pages/dashboard/ChartDashBoard";
import Chart from "../assets/chartn/chart";
const Router = () => {
    return (
        <div className="grid wide">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route
                        path="dashboard"
                        element={<ChartDashBoard />}
                    ></Route>
                    <Route path="info" element={<Info />}></Route>
                    <Route path="equipment" element={<Chart />}></Route>
                </Route>
                <Route path="login" element={<PageLogin />}></Route>
                <Route path="forgotPass" element={<PageForgot />}></Route>
                <Route path="newPass" element={<PageForgot restpass />} />
            </Routes>
        </div>
    );
};

export default Router;
