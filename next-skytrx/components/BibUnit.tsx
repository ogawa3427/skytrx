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


export default function BibUnit({ articles, status }) {
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const filtered = status === 'enough' 
      ? articles.filter(article => article.status === 'enough')
      : articles.filter(article => article.status !== 'enough');
    setFilteredArticles(filtered);
  }, [articles, status]);

  return (
    <>
      {filteredArticles.map((article, index) => (
        <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
          <TiAuPuEd article={article} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} container direction="column" spacing={2}>
              <Grid item>
                {(status === 'enough') ? (
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
                ) : (
                  <>
                    <WhLimit article={article} />
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
}