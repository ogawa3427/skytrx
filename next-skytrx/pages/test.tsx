import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Nbar';

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
