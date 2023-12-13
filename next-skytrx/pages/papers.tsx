import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar.tsx';
import styled from 'styled-components';

import DataTable from '../components/DataTable.tsx';

const Papers = () => {
    return (
      <div>
        <ResponsiveAppBar />
        <h2>Your Papers</h2>
        <DataTable />
      </div>
    );
  };
  
  export default Papers;
