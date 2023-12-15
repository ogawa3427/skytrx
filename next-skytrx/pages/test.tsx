import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Nbar';
import Footer from '../components/Footer';

import SearchBox from '../components/SearchBox';
import PdfViewer from '../components/PdfViewer';
import CommentList from '../components/CommentList';
import StartReview from '../components/StartReview';

import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Test = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // useStateを使用して状態を管理

  useEffect(() => {
    const token = Cookies.get('loggedin');
    if (!token || token == 'false') {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={{ margin: '8px' }}></div>
      <SearchBox />
      <CommentList toSearchProp="2" />
      <PdfViewer />
      <Footer />
    </div>
  );
};

export default Test;