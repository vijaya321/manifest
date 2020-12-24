import React from "react";
import styled from "styled-components";

import menu from "../../assets/images/menu.png";

const MainNavigation = styled.nav`
  align-items: center;
  background-color: #F4F4F4;
  border-style: ridge;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;

`;
  
const MainNavigationHeader = styled.nav`
padding-left: 33.6em;
color: #4E78F6;
font-weight: semi-bold;
font-size: 1.2rem;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  margin-left: -2em;
}
    
@media only screen and (max-width: 600px) {
    padding-left: 7.5em; 
}
`;

const Header = () => {
    return <MainNavigation>
          <MainNavigationHeader>
          Manifest
          </MainNavigationHeader>
          <img src={menu} />
          </MainNavigation>;
};

export default Header;