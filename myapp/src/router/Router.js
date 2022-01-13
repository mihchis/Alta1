import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../pages/user/PageLogin";
import PageForgot from "../pages/user/PageForgot";
import Home from "../pages/home/Home";
import Info from "../pages/home/Info";
import ChartDashBoard from "../pages/home/ChartDashBoard";
import Chart from "../components/chart";
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
