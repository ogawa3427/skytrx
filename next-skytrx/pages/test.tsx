import React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import BasicTabs from '../components/Tab';
import BasicTabsB from '../components/TabB';
import styled from 'styled-components';

import DataTable from '../components/DataTable';

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

const Test = () => {

    return (
      <div>
        <ResponsiveAppBar />
      </div>
    );
  };
  
  export default Test;
