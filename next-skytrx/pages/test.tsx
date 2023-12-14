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
import CommentList from '../components/CommentList';

import { useRouter } from 'next/router';

const Test = () => {
    const router = useRouter();
    const currentpath = router.asPath;

    return (
      <div>
        <h2>{currentpath}</h2>
        <Navbar />
        <div style={{ margin: '8px' }}></div>
        <SearchBox />
        <CommentList toSearchProp="2" />
        <PdfViewer />
      </div>
    );
  };
  
  export default Test;
