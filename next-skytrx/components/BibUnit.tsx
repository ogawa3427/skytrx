import React from 'react';
import { Paper, Typography, Grid, Rating } from '@mui/material';
import users from '../public/data/users.json';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
export default function BibUnit({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
          <a href={`/article/${article.doi}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" component="span">
              {article.title}
            </Typography>
          </a>
          <br />
          <Typography variant="h6" component="span" style={{ marginLeft: '8px' }}>
            {article.personalid.map(id => users[id] ? users[id].name : "名前なし").join(", ")}
          </Typography>
          <Typography variant="subtitle1">Published on: {article.year}/{article.month}/{article.day}</Typography>
          <Grid container spacing={2}>
            {/* 左側のコンテナ */}
            <Grid item xs={12} sm={6} container direction="column" spacing={2}>
              <Grid item>
                <Grid container alignItems="center" spacing={1}>
                  <Typography variant="h6">Impact</Typography>
                  <Rating name="impact-rating" value={parseFloat(article.impact)} readOnly />
                </Grid>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <VisibilityIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{article.view}</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <EditIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{article.edit}</Typography>
                  </Grid>
                  <Grid item>
                    <ChatBubbleIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{article.comment}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* 右側のコンテナ */}
            <Grid item xs={12} sm={6} container direction="column" spacing={1}>
              <Grid item container alignItems="center" spacing={1}>
                <Typography variant="body2">Novelty</Typography>
                <Rating name="novelty" value={parseFloat(article.novelty)} readOnly />
              </Grid>
            <Grid item container alignItems="center" spacing={1}>
                <Typography variant="body2">Originality</Typography>
                <Rating name="originality" value={parseFloat(article.originality)} readOnly />
              </Grid>
              <Grid item container alignItems="center" spacing={1}>
                <Typography variant="body2">Validity</Typography>
                <Rating name="validity" value={parseFloat(article.validity)} readOnly />
              </Grid>
              <Grid item container alignItems="center" spacing={1}>
                <Typography variant="body2">Ethics</Typography>
                <Rating name="ethics" value={parseFloat(article.ethics)} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
