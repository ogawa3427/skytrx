import React from 'react';
import Button from '@mui/material/Button';
import Nbar from '../components/Nbar';
import ResponsiveAppBar from '../components/ResponsiveAppBar.tsx';

const Test = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Test</h1>
      <Button variant="contained">Test</Button>
    </div>
  );
};

export default Test;
