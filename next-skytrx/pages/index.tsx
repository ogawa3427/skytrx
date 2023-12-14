import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nbar';
import Footer from '../components/Footer';
import BibUnit from '../components/BibUnit';
import SearchBox from '../components/SearchBox';
import TwoToggle from '../components/TwoToggle';
import OneToggle from '../components/OneToggle'; // OneToggleをインポート
import papers from '../public/data/papers.json';
import Cookies from 'js-cookie';
import { Grid } from '@mui/material';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // useStateを使用して状態を管理
    const [lstatus, setLstatus] = useState('reviewedWaiting'); // useStateを使用して状態を管理
    useEffect(() => {
        const token = Cookies.get('loggedin');
        if (!token || token == 'false') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
        const lstatus = Cookies.get('enoughor');
        if (!lstatus || lstatus == 'reviewedWaiting') {
            setLstatus('reviewedWaiting');
        } else {
            setLstatus('reviewedEnough');
        }
    }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={{ margin: '8px' }}></div>
      <Grid container>
        <SearchBox />
        {isLoggedIn ? <TwoToggle /> : <OneToggle />}
      </Grid>
      <BibUnit articles={papers} status={lstatus} />
      <Footer />
    </div>
  );
}
export default Home;