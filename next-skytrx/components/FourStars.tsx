// FourStars.tsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function FourStars({ article }) {
  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item container alignItems="center">
          <Typography variant="body2">Novelty</Typography>
          <Rating name="novelty" value={parseFloat(article.novelty)} readOnly />
          <Typography variant="body2">{parseFloat(article.novelty)}</Typography>
        </Grid>
        <Grid item container alignItems="center">
          <Typography variant="body2">Originality</Typography>
          <Rating name="originality" value={parseFloat(article.originality)} readOnly />
          <Typography variant="body2">{parseFloat(article.originality)}</Typography>
        </Grid>
        <Grid item container alignItems="center">
          <Typography variant="body2">Validity</Typography>
          <Rating name="validity" value={parseFloat(article.validity)} readOnly />
          <Typography variant="body2">{parseFloat(article.validity)}</Typography>
        </Grid>
        <Grid item container alignItems="center">
          <Typography variant="body2">Ethics</Typography>
          <Rating name="ethics" value={parseFloat(article.ethics)} readOnly />
          <Typography variant="body2">{parseFloat(article.ethics)}</Typography>
        </Grid>
      </Grid>
    </>
  );
}