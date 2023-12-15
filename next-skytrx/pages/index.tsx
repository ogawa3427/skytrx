import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Nbar';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import TwoToggle from '../components/TwoToggle';
import OneToggle from '../components/OneToggle'; // OneToggleをインポート
import papers from '../public/data/papers.json';
import Cookies from 'js-cookie';

// GridとBibUnitコンポーネントの動的インポート
const DynamicGrid = dynamic(
  () => import('@mui/material/Grid'),
  { ssr: false }
);

const DynamicBibUnit = dynamic(
  () => import('../components/BibUnit'),
  { ssr: false }
);

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
            setLstatus('enough');
        }

    }, []); // useEffectを使用してクライアントサイドでのみログイン状態を設定

    let baselist = [...papers];
    let newpaper = Cookies.get('paperData');
    if (newpaper) {
        newpaper = JSON.parse(newpaper);
        let ref = newpaper.reference;
        ref = ref.split(',');
        baselist.push(newpaper);
    }

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={{ margin: '8px' }}></div>
      <DynamicGrid container>
        <SearchBox />
        {isLoggedIn ? <TwoToggle /> : <OneToggle />}
      </DynamicGrid>
      <DynamicBibUnit articles={baselist} status={lstatus} />
      <Footer />
    </div>
  );
}
export default Home;