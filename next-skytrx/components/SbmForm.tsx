import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';

export default function PaperSubmissionForm() {
  const [paperData, setPaperData] = useState({
    doi: '20',
    title: '',
    personalid: '25',
    year: '2023',
    month: '12',
    day: '16',
    lastedit: '2023-12-16',
    abstract: '',
    reference: '1,2,3',
    status: 'waitingreview',
    ethics: '1.5',
    validity: '3.1',
    originality: '1.4',
    novelty: '1.3',
    comment: '0',
    edit: '0',
    view: '12'
  });

  // New state variable for the file
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setPaperData({ ...paperData, [e.target.name]: e.target.value });
  };

  // New function to handle file changes
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームデータとファイルをここで処理します
    console.log(paperData, file);
    Cookies.set('paperData', JSON.stringify(paperData));
    console.log(Cookies.get('paperData'));
    // 完了のアラートを表示します
    alert('Successfully Published!');
  };

  // useEffect to save paperData to Cookie whenever it changes
  useEffect(() => {
    Cookies.set('paperData', JSON.stringify(paperData));
  }, [paperData]);

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" component="h1">Submit Your Paper</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={paperData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Abstract"
              name="abstract"
              multiline
              rows={4}
              value={paperData.abstract}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              onChange={handleFileChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="References"
              name="references"
              multiline
              rows={4}
              value={paperData.reference}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: '#f0f0f0', // バックグラウンドカラーを設定
                borderRadius: '50%', // ボーダーラジウスを50%に設定
                padding: '0px 20px', // 上下のパディングを10px、左右のパディングを20pxに設定
              }}
            >
              <Button type="submit" variant="contained" style={{ backgroundColor: 'red' }}>
                Submit Paper
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
