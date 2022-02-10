import React from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "../../components/dashboard/Dashboard";


const Home = () => {
    return (
        <div className="home row no-gutters">
            <DashBoard />

            <Outlet />
        </div>
    );
};

export default Home;