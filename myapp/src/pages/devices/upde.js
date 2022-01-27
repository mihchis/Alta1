import React from "react";
import { useParams } from "react-router-dom";
import FormAddDevice from "./formaddde";
import { Equipments } from "../../assets/dummydata/equipData";
import HeaderInform from "../infor/HeaderInform";

const UpdateDevice = () => {
    const { id } = useParams();

    const data = Equipments.find((item) => item.id === id);

    return (
        <div>
            <div className="deviceManager updateDevice">
                <HeaderInform
                    title="Cập nhật thiết bị"
                    task={["Thiết bi", "Danh sách thiết bị", ""]}
                />
                <div className="deviceManager-tittle">Quản lý thiết bị</div>
                <FormAddDevice update data={data} />
            </div>
        </div>
    );
};

export default UpdateDevice;