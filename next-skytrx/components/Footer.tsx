import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey', py: 3 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4} style={{ paddingLeft: '50px' }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: 'Times New Roman, serif', textTransform: 'none' }}>
            Science Chain
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" color="#FFFFFF" align="center">
            All rights reserved: Science Chain
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" color="#FFFFFF" align="center">
            @BLOCKCHAIN HACKATHON for students2023
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}