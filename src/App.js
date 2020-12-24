import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StoreContext from './store';
import ResponseHandler from './components/ResponseHandler';
import Info from './components/Info';

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F4F4F4;
  padding: 0;
  margin: 0;

`;

const AppContentContainer = styled.div`
  padding: 4em 25em 1em 25em;
  width: 100vh;
  overflow: auto;
  height: calc(100vh - 300px);

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
   height: 30vh;
    padding: 2px;
  }

  @media only screen and (max-width: 600px) {
    
    padding: 0;
    margin: 0;
}

@media only screen  and (min-width : 1224px) {
  padding: 0;
  margin: 3em 24em 10em 24em; 
}
`;

export default () => {
  const [store, setContext] = useState([{id: 1, message: [ `Hi! I'm Henry, your personal transfer specialist.`,`Nice work deciding to consolidate your retirement accounts. Choosing the right one can be hard. 
  Luckily, I'm here to help!`,
 `Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?`] }]);

	return (
    <AppContainer>
    <Header />
    <AppContentContainer>
		<StoreContext.Provider value={{store, setContext}}>
			<Info />
      <ResponseHandler />
		</StoreContext.Provider>
    </AppContentContainer>
    </AppContainer>
  );
}

