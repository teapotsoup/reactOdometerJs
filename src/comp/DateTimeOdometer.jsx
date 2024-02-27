import  { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "odometer/themes/odometer-theme-car.css";

const DateTimeOdometer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getFormattedDateTime(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }

    return (
        <div>
            <Odometer value={getFormattedDateTime(currentDateTime)} format="dddd/dd/dd dd:dd:dd" theme="car" />
        </div>
    );
};

export default DateTimeOdometer;
