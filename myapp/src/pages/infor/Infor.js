import React from "react";
import HeaderInform from "./HeaderInform";
import CardInform from "./CardInform";
import { users } from "../../assets/dummydata/userData";
const Infor = () => {
    return (
        // <div className="col l-10">
        <div className="infoUser ">
            <HeaderInform title="Thông tin cá nhân" />
            <CardInform user={users[0]} />
        </div>
        // </div>
    );
};

export default Infor;