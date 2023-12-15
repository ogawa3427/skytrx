import React from 'react';
import { Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Impact from './Impact';

export default function TreeIsons({ article }) {
  return (
    <>
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
    </>
  );
}