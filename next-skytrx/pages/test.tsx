import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Nbar';
import BasicTabs from '../components/Tab';
import BasicTabsB from '../components/TabB';
import styled from 'styled-components';

import DataTable from '../components/DataTable';
import BibUnit from '../components/BibUnit';
import SearchBox from '../components/SearchBox';

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
        <Navbar />
        <div style={{ margin: '8px' }}></div>
        <SearchBox />
      </div>
    );
  };
  
  export default Test;
