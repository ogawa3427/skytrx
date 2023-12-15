import React from 'react';
import { Paper, Grid } from '@mui/material';
import users from '../public/data/users.json';
import Cookies from 'js-cookie';

import StartReview from './StartReview';
import TiAuPuEd from './TiAuPuEd';
import FourStars from './FourStars';
import Impact from './Impact';
import ThreeIcons from './ThreeIcons';
import LimitDate from './LimitDate';

export default function BibUnit({ articles, status }) {
  if (status === 'reviewedWaiting') {
    articles = articles.filter(article => article.status !== 'enough');
  } else {
    articles = articles.filter(article => article.status === 'enough');
  }

  return (
    <>
      {articles.map((article, index) => (
        <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
          <TiAuPuEd article={article} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} container direction="column" spacing={2}>
              <Grid item>
                {status === 'reviewedWaiting' ? (
                  <LimitDate article={article} />
                ) : (
                  <>
                    <Impact article={article} />
                    <ThreeIcons article={article} />
                  </>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} container direction="column" spacing={1}>
              {status !== 'reviewedWaiting' && <FourStars article={article} />}
              {status === 'reviewedWaiting' && !true && <StartReview doi={article.doi} />}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
}