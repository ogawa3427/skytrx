import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const { contract } = useContract("0x04b392cc6cda280c41e6fd637359f6d7f3ecbc30");
  const { data: nft, isLoading, error} = useNFT(contract, "9678");

  const [value, setValue] = React.useState(0);
  
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>Error</div>; 

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Papers" {...a11yProps(0)} />
          <Tab label="Funding" {...a11yProps(1)} />
          <Tab label="Supporters" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ThirdwebNftMedia metadata={nft.metadata} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <img src="/images/zunda.jpg" alt="description_of_image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
