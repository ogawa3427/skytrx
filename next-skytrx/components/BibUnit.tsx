import React from 'react';
import { Paper, Typography, Grid, Rating } from '@mui/material';
import users from '../public/data/users.json';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StartReview from './StartReview';

export default function BibUnit({ articles, status }) {
  // 日付に月を加算する関数
  const addMonths = (date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  };

  // 期限までの日数を計算する関数
  const calculateDaysRemaining = (dueDate: Date) => {
    const currentDate = new Date();
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  if (status === 'reviewedWaiting') {
    articles = articles.filter(article => article.status !== 'enough');
  } else {
    articles = articles.filter(article => article.status === 'enough');
  }

  return (
    <div>
      {articles.map((article, index) => {
        // 日付を作成し、4ヶ月を加算
        const dueDate = addMonths(new Date(article.year, article.month - 1, article.day), 4);
        // 期限までの日数を計算
        const daysRemaining = calculateDaysRemaining(dueDate);

        return (
          <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
            <a href={`/article/${article.doi}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h5" component="span">
                {article.title}
              </Typography>
            </a>
            <br />
            <Typography variant="subtitle1" component="span" style={{ display: 'block', marginTop: '8px' }}>
              {article.personalid.map(id => users[id] ? users[id].name : "名前なし").join(", ")}
            </Typography>
            <Typography variant="subtitle1">Published on: {article.year}/{article.month}/{article.day}</Typography>
            <Grid container spacing={2}>
              {/* 左側のコンテナ */}
              <Grid item xs={12} sm={6} container direction="column" spacing={2}>
                <Grid item>
                    {!(status == 'reviewedWaiting') ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <h3>Review Limit duedate {dueDate.getFullYear()}/{dueDate.getMonth() + 1}/{dueDate.getDate()}</h3>
                        <p>{daysRemaining} days remain</p>
                      </>
                    )}
                  
                </Grid>
              </Grid>

              {/* 右側のコンテナ */}
              {!(status == 'reviewedWaiting') ? (
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
              ) : (
                <div>
                  {(status == 'reviewing') ? (
                    <h2>reviewing</h2>
                  ) : (
                    <StartReview doi={article.doi} />
                  )}
                </div>
              )}
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
