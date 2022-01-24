import React from "react";
import Sidebar from "./sidebar";
import DashboardCenter from "./DashboardCenter";
import HeaderInform from "../infor/HeaderInform";

const ChartDashBoard = () => {
    return (
        <div className="mainHome">
            <HeaderInform title="Dashboard" bgcolorright="#fff" />
            <div className="mainHome-wapper">
                <DashboardCenter />

                <Sidebar />
            </div>
        </div>
    );
};

export default ChartDashBoard;