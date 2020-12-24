import React, { useState } from "react";
import Calender from 'react-date-picker';

const ReactCalender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = () => {
        setDate(Date);
    }

    return (
        <>
        <Calender onChange={onChange} value={date} />
        </>
    )
}

export default ReactCalender;