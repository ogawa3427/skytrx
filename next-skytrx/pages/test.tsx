import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nbar';
import Footer from '../components/Footer';

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
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <Navbar isLoggedIn={true} />
      <Footer />
    </div>
  );
};

export default Test;