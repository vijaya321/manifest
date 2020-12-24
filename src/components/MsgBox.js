import React, { useContext, useEffect, useState } from 'react';
import Store from '../store';


import styled from "styled-components";

const ButtonContainer = styled.button`
	border-radius: 8px;
	background-color: #2257F4; 
	border: none;
  	color: white;
  	padding: 20px;
  	text-align: center;
  	text-decoration: none;
  	display: inline-block;
  	font-size: 16px;
	margin-top: 2em;
  	cursor: pointer;
	width: 20vh;
	margin-left: 3em;

	@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
		width: 13vh;
  }
	
`;

const BtnContainer = styled.div`
	position: fixed;
	bottom: 2em;
    right: 37em; 

	@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	position: relative;
	right: -0.5em;
	margin-top: 7em;
    }

	@media only screen and (max-width: 600px) {
	right: 5em;
	margin-top: 7em;
}

`;


const yesResponses = {
	1: `Yes, I do`,
}

const noResponses = {
	3: `Not really`,
	5: `Passive`
}

export default (props) => {
	const { store, setContext } = useContext(Store);
	const storeId = store[store.length - 1].id;
	
	const sendResponseYes = (event) => {
		
		console.log(storeId);
		event.preventDefault();
		 
		if(storeId % 2 != 0 && yesResponses[storeId]) {
			console.log("if yes response");
			setContext([...store, {
				response: yesResponses[storeId],
				id: storeId+1,
				flag: 'response',
			}]);
			props.waitImgLoad();
			props.setMessage(true);
		} 
	}

	const sendResponseNo = (event) => {
		event.preventDefault();
		console.log("no response");
		if(storeId % 2 != 0 && noResponses[storeId]) {
		setContext([...store, {
			response: noResponses[storeId],
			id: storeId+1,
			flag: 'response',
		}]);
		props.waitImgLoad();
		props.setMessage(true);
	}	  
}

	return (
		<>
		<BtnContainer>
		<ButtonContainer onClick={sendResponseYes}>Yes</ButtonContainer>
		<ButtonContainer onClick={sendResponseNo}>No</ButtonContainer>
		</BtnContainer>
		</>
	)
}