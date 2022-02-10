import React, { useState } from "react";
import DropDown from "../../components/dashboard/dropbox";
import HeaderInform from "../infor/HeaderInform";
import { nameSer } from "../../assets/dummydata/capsodata";
import button from "../../components/dashboard/button";
import { Link } from "react-router-dom";
import ModeRandom from "./modecapso";
import { Button } from "@mui/material";

const AddRandom = () => {
    const [nameService, setNameService] = useState("Chọn dịch vụ");
    const [mouted, setMouted] = useState(false);
    const handleClick = () => {
        setMouted(true);
    };
    return (
        <div className="deviceManager">
            <HeaderInform
                title={"Cấp số mới"}
                task={["Cấp số", "Danh sách cấp số", ""]}
            />
            <div className="deviceManager-tittle">Quản lý cấp số</div>
            <div className="main-Random">
                <div className="main-Random_heading">cấp số mới</div>
                <div className="main-Random_content">
                    Dịch vụ khách hàng lựa chọn
                </div>
                <DropDown
                    scroll
                    up
                    selected={nameService}
                    setSelected={setNameService}
                    options={nameSer}
                />
                <div className="controll-btn">
                    <Link to="/randomNumber">
                        <Button
                            type="button"
                            buttonStyle="btn--warning--outline"
                            buttonSize="btn--small"
                        >
                            Hủy bỏ
                        </Button>
                    </Link>

                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--small"
                        onClick={handleClick}
                    >
                        In số
                    </Button>
                </div>
            </div>
            {mouted && <ModeRandom setMouted={setMouted} />}
        </div>
    );
};

export default AddRandom;