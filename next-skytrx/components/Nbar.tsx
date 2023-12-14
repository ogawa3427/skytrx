import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" style={{ backgroundColor: 'gray' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Science Chain
          </Typography>
          {/* Stackに上下マージンを追加 */}
          <Stack direction="column" spacing={1} style={{ marginTop: '10px', marginBottom: '10px' }}>
            {/* Loginボタンに青い境界線を追加 */}
            <Button color="inherit" style={{ backgroundColor: '#505050', color: '#FFFFFF', borderRadius: '15px', border: '2px solid #FFFFFF' }}>Login</Button>
            {/* SignUpボタンに緑の境界線を追加 */}
            <Button color="inherit" style={{ backgroundColor: '#FFFFFF', color: '#000000', borderRadius: '15px', border: '2px solid #000000' }}>SignUp</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
