import React, { useContext, setContext, useEffect, useState } from 'react';
import henry_avatar from "../assets/images/henry_avatar.png";
import MsgBox from './MsgBox';
import Store from '../store';

import wait from "../assets/images/wait.png";
import edit from "../assets/images/edit.png";
import styled from "styled-components";

import QuestionHandler from './QuestionHandler';
import ReactCalender from './DatePicker';
import DatePicker from 'react-date-picker';

const InfoContainer = styled.div`
    margin: auto;
    padding: 0 17em;
    width: 100%;
  
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 0;
    margin: -3em;
    margin-top: 1em;
  }

  @media only screen and (max-width: 600px) {
    padding: 2em 1em 2em 10em; 
}
`;

const NameContainer = styled.p`
    font-weight: semi-bold;
    font-size: 30px;
    padding-left: 0.7em;
    margin: 0;
`;

const TitleContainer = styled.p`
    font-size: 18px;
    color: #707070;
    text-shadow: 1px 1px #D0D0D0;
    margin-left: -1.5em;
`;

const StoreMessageContainer = styled.div`
    padding-left: 2em;
    width: 37%;
    height: 40%;
    
    @media only screen  and (min-width : 1224px) {
    width: 70vh;
    margin: 0 4em;
}
`;

const StoreBot = styled.div`
   margin-top: 7em;
`;

const ChatContainer = styled.div`
   
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    max-width: 20%;
    }

    @media only screen and (max-width: 600px) {
    padding: 0; 
    margin-top: -2em;
    width: 30em;
}
`;

const ResponseContainer = styled.button`
    float: right;
	  background-color: #2257F4; 
	  border: none;
  	color: #FFFFFF;
    text-align: top;
  	padding: 0.5em;
  	text-decoration: none;
  	display: inline-block;
  	font-size: 15px;
	  margin-top: 2em;
  	cursor: pointer;
	  width: 18vh;
    
	  margin-left: 3em;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const EditIcon = styled.img`
   padding: -1em;
`;

const DatePickerComponent = styled.div`
   
`;

export default () => {
    const { store, setContext } = useContext(Store);
    const [loading, setLoading] = useState(false);
    const [showMsg, setMsg] = useState(true);
   
    const waitImgLoad =( () => {
      console.log("loading");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);

      }, 1000)
    });

    const setMessage =( (props) => {
      setMsg(props);
    });

    return (
        <>
        <InfoContainer>
        <img src={henry_avatar} />
        <NameContainer>Henry</NameContainer>
        <TitleContainer>TRNASFER SPECIALIST</TitleContainer>
        </InfoContainer>
        <ChatContainer>
        {store.map( (storeItem) => {
          console.log(storeItem);
                return (
                  <>
                  <p>{storeItem.message}</p>                  
                  {storeItem.flag && <ResponseContainer><EditIcon src={edit} />{storeItem.response} </ResponseContainer>}
                  {storeItem.flag && 
                  <StoreBot>{loading && <img src={wait} /> } 
                    {!loading && <QuestionHandler showMsg={showMsg} setMessage={setMessage} storeId={storeItem.id} storeMsg={storeItem.message} />} 
                  
                  </StoreBot>}
                  <DatePickerComponent>{storeItem.id == 6 && <DatePicker />}</DatePickerComponent>
                  </>
                  )
                })}
        </ChatContainer>
        
        <MsgBox waitImgLoad={waitImgLoad} setMessage={setMessage} />
        
        </>
        
	);
}