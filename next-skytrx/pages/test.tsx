import React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/ResponsiveAppBar.tsx';
import BasicTabs from '../components/Tab.tsx';
import BasicTabsB from '../components/TabB.tsx';

function getGreetingBasedOnTime() {
  const hours = new Date().getHours();
  
  if (hours < 12) {
    return 'おはようございます';
  } else if (hours >= 12 && hours < 18) {
    return 'こんにちは';
  } else {
    return 'こんばんは';
  }
}

const Test = () => {
  const greeting = getGreetingBasedOnTime(); // 時間に基づく挨拶を取得

  return (
    <div>
      <ResponsiveAppBar />
      <h4>{greeting}、清水さん</h4>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 auto', minWidth: '50%' }}>
          <BasicTabs />
        </div>
        <div style={{ flex: '1 1 auto', minWidth: '50%' }}>
          <BasicTabsB />
        </div>
      </div>
      <h1>Test</h1>
      <Button variant="contained">Test</Button>
    </div>
  );
};

export default Test;
