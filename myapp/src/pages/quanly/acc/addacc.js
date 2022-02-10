import React from "react";
import FormAddDevice from "../../devices/formaddde";
import HeaderInform from "../../infor/HeaderInform";
import FormAddAccount from "./formaddacc"

const AddAccount = () => {
    return (
        <div className="deviceManager">
            <HeaderInform
                title={"Thêm tài khoản"}
                task={["Cài đặt hệ thống", "Quản lý tài khoản", ""]}
            />
            <div className="deviceManager-tittle">Quản lí tài khoản</div>

            <FormAddAccount />
        </div>
    );
};

export default AddAccount;