import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import styled from 'styled-components';

import DataTable from '../components/DataTable';

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
