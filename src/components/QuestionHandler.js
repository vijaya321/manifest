import React, { useContext, useEffect, useState } from 'react';
import wait from "../assets/images/wait.png";
import Store from '../store';

export default (props) => {
    const { store, setContext } = useContext(Store);
    const storelength = store[store.length - 1].id;
    const [loading, setLoading] = useState(true);
    const [msgLength, setMessageLength] = useState(2);

    const nextMsgId = props.storeId + 1;
    const questionsId = props.storeId;
    const questions = {
        2: `Some retirement plans alllow you to take out loans. Is this feature important to you?`,
        4: `There are 2 types of investers:
            Active investers prefer to frequently monitor their investment choices, adjust allocations, and follow the market.
            Passive investers like their investments to be managed for them.
            Which one best describes you?`,
        6: `We are required by your provider to collect some identity information.
            What is your Date of Birth?`
   }
 
   if(props.showMsg) {
    setContext([...store, {
        message: questions[questionsId],
        id: nextMsgId,
    }]); 
    props.setMessage(false);
   }

    return (
        <></>
    )
}