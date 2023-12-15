import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  borderRadius: '20px',
  backgroundColor: '#909090',
  color: 'black',
  '&:hover': {
    backgroundColor: '#b0b0b0',
    borderColor: 'rgba(0, 0, 0, 0.23)',
  },
  padding: '1px 10px',
  margin: '2px',
  // その他のスタイルはここに追加
});

export default function RoundedButton({ doi }) {
    return (
      <StyledButton variant="outlined" style={{ textDecoration: 'none', color: 'inherit' }}>
        <a href={`/review/${doi}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="span">
            Starting Review 
          </Typography>
        </a>
      </StyledButton>
    );
  }