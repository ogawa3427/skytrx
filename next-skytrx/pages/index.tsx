import React from 'react';
import Navbar from '../components/Nbar';
import BibUnit from '../components/BibUnit';
import SearchBox from '../components/SearchBox';
import TwoToggle from '../components/TwoToggle';
import OneToggle from '../components/OneToggle'; // OneToggleをインポート
import papers from '../public/data/papers.json';
import Cookies from 'js-cookie';
import { Grid } from '@mui/material';


export const AuthContext = React.createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = Cookies.get('loggedin');
    if (!token||token=='false') {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div>
        <Navbar />
        <div style={{ margin: '8px' }}></div>
        <Grid container>
          <SearchBox />
          {isLoggedIn ? <TwoToggle /> : <OneToggle />} // ログイン状態に基づいて表示を切り替え
        </Grid>
        <BibUnit articles={papers} />
      </div>
    </AuthContext.Provider>
  );
}
export default Home;