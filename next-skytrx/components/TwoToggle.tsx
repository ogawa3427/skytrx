import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';

import Cookies from 'js-cookie';

export default function TwoToggle() {
  let enoughor = "reviewedWaiting";
  const token = Cookies.get('enoughor');
  if (!token||token=='reviewedWaiting') {
    enoughor = "reviewedWaiting";
  } else {
    enoughor = "reviewedEnough";
  }

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
              checked={enoughor === 'reviewedEnough'}
              onChange={() => {
                if (enoughor === 'reviewedWaiting') {
                  Cookies.set('enoughor', 'reviewedEnough');
                } else {
                  Cookies.set('enoughor', 'reviewedWaiting');
                }
                window.location.reload();
              }}
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
              checked={enoughor === 'reviewedWaiting'}
              onChange={() => {
                if (enoughor === 'reviewedWaiting') {
                  Cookies.set('enoughor', 'reviewedEnough');
                } else {
                  Cookies.set('enoughor', 'reviewedWaiting');
                }
                window.location.reload();
              }}
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