import React from "react";
import DashboardRight from "../sidebar/sidebar";
import DashboardCenter from "./DashboardCenter";
import HeaderInfo from "../information/HeaderInfo";

const ChartDashBoard = () => {
    return (
        <div className="mainHome">
            <HeaderInfo title="Dashboard" bgcolorright="#fff" />
            <div className="mainHome-wapper">
                <DashboardCenter />

                <DashboardRight />
            </div>
        </div>
    );
};

export default ChartDashBoard;