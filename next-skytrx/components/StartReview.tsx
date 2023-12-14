import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  borderRadius: '20px', // 角を丸くする
  backgroundColor: '#f0f0f0', // 背景色を薄いグレーに設定
  color: 'black', // テキストの色を黒に
  '&:hover': {
    backgroundColor: '#e0e0e0', // ホバー時の背景色を少し暗く
    borderColor: 'rgba(0, 0, 0, 0.23)', // ホバー時の枠線の色
  },
  padding: '10px 20px', // パディングを調整
  margin: '10px', // マージンを追加
  // その他のスタイルはここに追加
});

export default function RoundedButton() {
  return (
    <StyledButton variant="outlined">
        Start Reviewing
    </StyledButton>
  );
}
