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
  const calculateDaysRemaining = (dueDate) => {
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
              <Grid item xs={12} sm={6} container direction="column" spacing={2}>
                <Grid item>
                    {daysRemaining < 0 ? (
                      <Typography variant="h6" style={{ color: 'red' }}>締め切り期限切れ</Typography>
                    ) : !(status == 'reviewedWaiting') ? (
                      <>
                        <Grid container alignItems="center" spacing={1}>
                          <Typography variant="h6">Impact</Typography>
                          <Rating name="impact-rating" value={parseFloat(article.impact)} readOnly />
                        </Grid>
                        {/* ... その他のコンテナ要素 ... */}
                      </>
                    ) : (
                      <>
                        <h3>Review Limit duedate {dueDate.getFullYear()}/{dueDate.getMonth() + 1}/{dueDate.getDate()}</h3>
                        <p>{daysRemaining} days remain</p>
                      </>
                    )}
                </Grid>
              </Grid>
              {/* ... 右側のコンテナ ... */}
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
