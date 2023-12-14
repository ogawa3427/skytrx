import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        borderRadius: '30px', // 角の丸みを調整
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)', // 枠線の色
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)', // ホバー時の枠線の色
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)', // フォーカス時の枠線の色
          }
        },
        '& .MuiInputAdornment-root .MuiSvgIcon-root': {
          color: 'rgba(0, 0, 0, 0.54)', // アイコンの色
        }
      }}
    />
  );
};

export default SearchInput;
