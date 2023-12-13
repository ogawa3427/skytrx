import React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import BasicTabs from '../components/Tab';
import BasicTabsB from '../components/TabB';
import styled from 'styled-components';

import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";

function getGreetingBasedOnTime() {
  const hours = new Date().getHours();
  
  if (hours < 12) {
    return 'おはようございます';
  } else if (hours >= 12 && hours < 18) {
    return 'こんにちは';
  } else {
    return 'こんばんは';
  }
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Home = () => {
    return (
      <div>
        <ResponsiveAppBar />
        <h4>{getGreetingBasedOnTime()}、清水さん</h4>
        <FlexContainer>
          <div style={{ flex: '1 1 0', padding: '0 32px', width: '50%' }}>
            <BasicTabs />
          </div>
          <div style={{ flex: '1 1 0', padding: '0 32px', width: '50%' }}>
            <BasicTabsB />
          </div>
        </FlexContainer>
      </div>
    );
  };
  
  export default Home;
