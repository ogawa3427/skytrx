// components/NavigationBar.jsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NavigationBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1565c0' }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div" style={{ flex: 1 }}>
          SkytrX
        </Typography>
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/papers">Papers</Button>
          <Button color="inherit" href="/funding">Funding</Button>
          <Button color="inherit" href="/supporters">Supporters</Button>
          <Button color="inherit" href="/discovery">Discovery</Button>
          <Button color="inherit" href="/profile">Profile</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}