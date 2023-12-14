import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Cookies from 'js-cookie';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

export default function Navbar({ isLoggedIn }) {
  const handleLogin = () => {
    Cookies.set('loggedin', 'true');
    window.location.reload();
  };
  const handleLogout = () => {
    Cookies.set('loggedin', 'false');
    Cookies.set('enoughor', 'enough');
    window.location.reload();
  };

  const MyIcon = () => (
    <Icon>
      <img src="/images/tomato.jpg" alt="myicon" style={{ borderRadius: '450%', border: '2px solid #000' }} />
    </Icon>
  );

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default" style={{ backgroundColor: 'gray' }}>
          <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: 'Times New Roman, serif', textTransform: 'none' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              Science Chain
            </Link>
          </Typography>
            <Stack direction="row" spacing={1} style={{ marginTop: '8px', marginBottom: '8px' }}>
              {isLoggedIn ? (
              <>
                <Button color="inherit" style={{ backgroundColor: '#505050', color: '#FFFFFF', borderRadius: '25px', border: '2px solid #FFFFFF', textTransform: 'none', fontFamily: 'Times New Roman, serif', padding: '2px 50px' }} onClick={handleLogout}>Logout</Button>
                <Link href="/mypage">
                  <IconButton style={{ border: '2px solid #000' }}>
                    <MyIcon />
                  </IconButton>
                </Link>
              </>
              ) : (
                <>
                  <Button color="inherit" style={{ backgroundColor: '#505050', color: '#FFFFFF', borderRadius: '25px', border: '2px solid #FFFFFF', textTransform: 'none', fontFamily: 'Times New Roman, serif', padding: '2px 50px' }} onClick={handleLogin}>Login</Button>
                  <Button color="inherit" style={{ backgroundColor: '#FFFFFF', color: '#000000', borderRadius: '25px', border: '2px solid #000000', textTransform: 'none', fontFamily: 'Times New Roman, serif', padding: '2px 50px' }}>SignUp</Button>
                </>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
