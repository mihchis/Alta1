import equipment from "../icon/monitor.png";
import service from "../icon/equiment.png";
import random from "../icon/random.png";
export const dataCircle = [
    {
        color: "#FF7506",
        color2: "#7E7D88",
        color3: "#EAEAEC",
        type: 1,
        active: 3799,
        noactive: 422,
        icon: equipment,
    },
    {
        color: "#4277FF",
        color2: "#7E7D88",
        color3: "#EAEAEC",

        type: 1,
        active: 221,
        noactive: 60,
        icon: service,
    },
    {
        color: "#35C75A",
        color2: "#7E7D88",
        color3: "#EAEAEC",
        color4: "#F178B6",
        type: 2,
        active: 4013,
        noactive: 468,
        skip: 32,
        icon: random,
    },
];
export const dataFunc = (arraydata, arrayColor) => ({
    datasets: [
        {
            data: arraydata,
            backgroundColor: arrayColor,
            hoverBackgroundColor: arrayColor,
        },
    ],
});
export const option = {
    legend: {
        display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 85,
};