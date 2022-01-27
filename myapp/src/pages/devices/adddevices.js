import React from "react";
import HeaderInform from "../infor/HeaderInform"
import FormAddDevice from "./formaddde";
const AddDevice = () => {
    return (
        <div className="deviceManager">
            <HeaderInform
                title={"Thêm thiết bị"}
                task={["Thiết bị", "Danh sách thiết bị", ""]}
            />
            <div className="deviceManager-tittle">Danh sách thiết bị</div>

            <FormAddDevice />
        </div>
    );
};

export default AddDevice;