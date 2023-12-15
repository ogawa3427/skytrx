import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';

export default function PaperSubmissionForm() {
  const [paperData, setPaperData] = useState({
    title: '',
    authors: '',
    abstract: '',
    keywords: '',
    references: ''
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
    // Process the form data and the file here
    console.log(paperData, file);
    Cookies.set('paperData', paperData);
    console.log(Cookies.get('paperData'));
  };

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
              value={paperData.references}
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
