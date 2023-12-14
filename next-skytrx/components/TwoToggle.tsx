import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';

export default function TwoToggle() {
  const [selectedValue, setSelectedValue] = useState('reviewedWaiting');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiFormControlLabel-root': {
          color: 'black', // テキストの色を黒に
        },
        '& .MuiSvgIcon-root': {
          color: 'black', // アイコンの色を黒に
        },
        '& .Mui-checked': {
          color: 'black', // チェックされたときの色を黒に
        },
        borderRadius: '30px', // ボーダーラジウスを設定
        padding: '0px 20px', // 上下のパディングを10px、左右のパディングを20pxに設定
        width: 'fit-content', // 幅を内容に合わせて調整
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f0f0f0', // バックグラウンドカラーを設定
          borderRadius: '30px', // ボーダーラジウスを設定
          marginBottom: '10px', // 下マージンを設定
          padding: '0px 20px', // 上下のパディングを10px、左右のパディングを20pxに設定
        }}
      >
        <FormControlLabel
          control={
            <Radio
              checked={selectedValue === 'reviewedEnough'}
              onChange={handleChange}
              value="reviewedEnough"
              name="review"
              color="primary"
            />
          }
          label='Reviewed Enough'
        />
      </Box>
      <Box
        sx={{
          backgroundColor: '#f0f0f0', // バックグラウンドカラーを設定
          borderRadius: '30px', // ボーダーラジウスを設定
          padding: '0px 20px', // 上下のパディングを10px、左右のパディングを20pxに設定
        }}
      >
        <FormControlLabel
          control={
            <Radio
              checked={selectedValue === 'reviewedWaiting'}
              onChange={handleChange}
              value="reviewedWaiting"
              name="review"
              color="primary"
            />
          }
          label='Reviewed Waiting'
        />
      </Box>
    </Box>
  );
}