// BibUnit.jsx
import React from 'react';
import { Paper, Typography, Grid, Rating } from '@mui/material';

export default function BibUnit({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
          <Typography variant="h5">{article.title}</Typography>
          <Typography variant="subtitle1">Published on: {article.year}/{article.month}/{article.day}</Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Impact: {article.impact}</Typography>
              <Rating name="impact-rating" value={parseFloat(article.impact)} readOnly />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Views: {article.view}</Typography>
            </Grid>
            {/* 他の評価や情報も同様に表示 */}
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
