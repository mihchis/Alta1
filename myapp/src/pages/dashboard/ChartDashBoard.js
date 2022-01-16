import React from "react";
import DashboardRight from "../sidebar/sidebar";
import DashboardCenter from "./DashboardCenter";
import HeaderInfo from "../information/HeaderInfo";
import Chart from "../../assets/chartn/chart";

const ChartDashBoard = () => {
    return (
        <div className="mainHome">
            <HeaderInfo title="Dashboard" bgcolorright="#fff" />
            <div className="mainHome-wapper">
                <DashboardCenter />
                <Chart />
                <DashboardRight />
            </div>
        </div>
    );
};

export default ChartDashBoard;
