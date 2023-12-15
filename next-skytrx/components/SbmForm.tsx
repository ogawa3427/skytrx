import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';

export default function PaperSubmissionForm() {
  const [paperData, setPaperData] = useState({
    title: '',
    authors: '',
    summary: '',
    keywords: '',
    content: '',
    references: ''
  });

  const handleChange = (e) => {
    setPaperData({ ...paperData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここでフォームのデータを処理する
    console.log(paperData);
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
              label="Authors"
              name="authors"
              value={paperData.authors}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Summary"
              name="summary"
              multiline
              rows={4}
              value={paperData.summary}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Keywords"
              name="keywords"
              value={paperData.keywords}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Content"
              name="content"
              multiline
              rows={8}
              value={paperData.content}
              onChange={handleChange}
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
            <Button type="submit" variant="contained" color="primary">
              Submit Paper
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
