import React from 'react';
import { Paper, Grid } from '@mui/material';
import users from '../public/data/users.json';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import StartReview from './StartReview';
import TiAuPuEd from './TiAuPuEd';
import FourStars from './FourStars';
import Impact from './Impact';
import ThreeIcons from './ThreeIcons';
import WhLimit from './WhLimit';
import LimitDate from './LimitDate';


export default function BibUnit({ articles, status }) {
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const filtered = status === 'enough' 
      ? articles.filter(article => article.status === 'enough')
      : articles.filter(article => article.status !== 'enough');
    setFilteredArticles(filtered);
  }, [articles, status]);

  const renderEnoughStatus = (article) => (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column">
            <Grid item>
              <Impact article={article} />
            </Grid>
            <Grid item>
              <ThreeIcons article={article} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FourStars article={article} />
        </Grid>
      </Grid>
    </>
  );
  
  const renderNotSubmittedReviewStatus = (article) => (
    <>
      <WhLimit article={article} />
    </>
  );
  
  const renderSubmittedReviewStatus = (article) => (
    <>
      <Impact article={article} />
      <LimitDate article={article} />
      <StartReview article={article} />
    </>
  );
  
  return (
    <>
      {filteredArticles.map((article, index) => (
        <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} container direction="row" alignItems="stretch">
              <Grid item style={{ maxHeight: '500px' }}>
                <img src={`/images/${article.img}.png`} alt="image" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
              </Grid>
              <Grid item>
                <TiAuPuEd article={article} />
                {status === 'enough' ? renderEnoughStatus(article) :
                status !== 'submittedReview' ? renderNotSubmittedReviewStatus(article) :
                renderSubmittedReviewStatus(article)}
              </Grid>
            
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
}