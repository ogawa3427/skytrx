import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function RoundedSearchBar() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'black', backgroundColor: '#f0f0f0', borderRadius: '50%' }} />
          </InputAdornment>
        ),
        style: {
          paddingRight: 8, // アイコンとプレースホルダーの間に適切な余白を追加
        }
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px', // テキストフィールド全体の角を丸くする
          backgroundColor: '#f0f0f0', // テキストフィールドの背景色
          '& fieldset': {
            borderColor: 'transparent', // 枠線を透明にする
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)', // ホバー時の枠線の色
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)', // フォーカス時の枠線の色
          },
        },
        '& .MuiInputBase-input': {
          color: 'black', // テキストの色を黒に
          padding: '10px 0', // 上下のパディングを調整
        },
        width: 'fit-content', // テキストフィールドの幅を内容に合わせて調整
      }}
    />
  );
}
