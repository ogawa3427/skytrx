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

//import TiAuPuEd from '../components/TiAuPuEd';
import Impact from '../components/Impact';
import ThreeIcons from '../components/ThreeIcons';

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

  const articles = [{
    "doi": "20",
    "title": "CP-Violation in the Renormalizable Theory of Weak Interaction",
    "personalid": "25",
    "year": "2023",
    "month": "7",
    "day": "1",
    "lastedit": "2023-7-3",
    "impact": "1.6",
    "novelty": "1.3",
    "originality": "1.4",
    "validity": "3.1",
    "ethics": "1.5",
    "view": "100",
    "comment": "0",
    "edit": "0",
    "reference": ["1", "5", "15"],
    "status": "enough"
  }];
  return (
    <div>
      <ThreeIcons article={articles[0]} />

    </div>
  );
};

export default Test;