import React from "react";
import { useRoutes } from "react-router-dom";

import PageLogin from "../pages/login/PageLogin";
import PageForgot from "../pages/login/PageForgot";
import Infor from "../pages/infor/Infor";
import ChartDashBoard from "../pages/dashboard/ChartDashBoard";

import AddDevice from "../pages/devices/adddevices";
import DetailDevice from "../pages/devices/detaildevices";
import UpdateDevice from "../pages/devices/upde";
import DeviceManager from "../pages/devices/managerdevices";

import ServiceManager from "../pages/service/semanager";
import AddService from "../pages/service/add";
import DetailService from "../pages/service/detail";
import ProtectedRouters from "../ProtectedRouters";

import RandomManager from "../pages/capso/capsomanager";
import AddRandom from "../pages/capso/addcapso";
import RandomDetail from "../pages/devices/capso";

import ReportManager from "../pages/report/reportmanager";

import Role from "../pages/quanly/role/role";
import FormRole from "../pages/quanly/role/formrole";

import AccountManager from "../pages/quanly/acc/accmanager";
import AddAccount from "../pages/quanly/acc/addacc";

import UserManager from "../pages/quanly/user/usermana";

const Router = () => {
    let routes = useRoutes([
        { path: "/", element: <PageLogin /> },
        
        {
            path: "/user",
            children: [
                { path: "forgotPass", element: <PageForgot /> },
                { path: "newPass", element: <PageForgot restpass /> },
                { path: "", element: <PageLogin /> },
            ],
        },
        {
            element: <ProtectedRouters />,
            children: [
                { path: "/info", element: <Infor /> },
                { path: "/dashboard", element: <ChartDashBoard/> },
                // equipment
                {
                    path: "/equipment",
                    children: [
                        { path: "add", element: <AddDevice /> },
                        {
                            path: "detailRandom",
                            children: [
                                { path: ":id", element: <RandomDetail /> },
                            ],
                        },
                        {
                            path: "update",
                            children: [
                                { path: ":id", element: <UpdateDevice /> },
                            ],
                        },
                        {
                            path: "detail",
                            children: [
                                { path: ":id", element: <DetailDevice /> },
                            ],
                        },
                        { path: "", element: <DeviceManager /> },
                    ],
                },
                //service
                {
                    path: "/service",
                    children: [
                        {
                            path: "add",
                            element: (
                                <AddService
                                    pathCancel="/service"
                                    pathSubmit="/service"
                                />
                            ),
                        },
                        {
                            path: "update",
                            children: [
                                {
                                    path: ":id",
                                    element: (
                                        <AddService
                                            pathCancel="/service"
                                            pathSubmit="/service"
                                            update
                                        />
                                    ),
                                },
                            ],
                        },
                        {
                            path: "detail",
                            children: [
                                { path: ":id", element: <DetailService /> },
                            ],
                        },
                        { path: "", element: <ServiceManager /> },
                    ],
                },
                //randomNumber
                {
                    path: "/randomNumber",
                    children: [
                        { path: "add", element: <AddRandom /> },
                        { path: "", element: <RandomManager /> },
                    ],
                },
                ///announce
                {
                    path: "/announce",
                    element: <ReportManager />,
                },
                //manager
                {
                    path: "/manage",
                    children: [
                        {
                            path: "role",

                            children: [
                                { path: "add", element: <FormRole /> },
                                {
                                    path: "update",
                                    children: [
                                        {
                                            path: ":id",
                                            element: (
                                                <FormRole
                                                    // pathCancel="/service"
                                                    // pathSubmit="/service"
                                                    update
                                                />
                                            ),
                                        },
                                    ],
                                },
                                { path: "", element: <Role /> },
                            ],
                        },
                        {
                            path: "account",
                            children: [
                                { path: "add", element: <AddAccount /> },
                                { path: "", element: <AccountManager /> },
                            ],
                        },
                        { path: "", element: <Role /> },
                        {
                            path: "user",

                            children: [
                                { path: "add", element: <FormRole /> },
                                {
                                    path: "update",
                                    children: [
                                        {
                                            path: ":id",
                                            element: (
                                                <FormRole
                                                    // pathCancel="/service"
                                                    // pathSubmit="/service"
                                                    update
                                                />
                                            ),
                                        },
                                    ],
                                },
                                { path: "", element: <UserManager /> },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            path: "*",
            element: "404 not found",
        },
    ]);
    return routes;
};

export default Router;