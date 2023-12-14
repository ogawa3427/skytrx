import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Nbar';
import BasicTabs from '../components/Tab';
import BasicTabsB from '../components/TabB';
import styled from 'styled-components';

import DataTable from '../components/DataTable';
import BibUnit from '../components/BibUnit';
import SearchBox from '../components/SearchBox';

import PdfViewer from '../components/PdfViewer';


const Test = () => {

    return (
      <div>
        <Navbar />
        <div style={{ margin: '8px' }}></div>
        <SearchBox />
        <PdfViewer />
      </div>
    );
  };
  
  export default Test;
