import React from 'react';
import { Paper, Typography, Grid, Rating } from '@mui/material';
import users from '../public/data/users.json';
import Cookies from 'js-cookie';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StartReview from './StartReview';

import TiAuPuEd from './TiAuPuEd';
import FourStars from './FourStars';
import Impact from './Impact';
import ThreeIcons from './ThreeIcons';

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
        const isDuePassed = daysRemaining < 0;

        return (
          <Paper key={index} elevation={3} sx={{ margin: '16px', padding: '16px' }}>
            <TiAuPuEd article={article} />
            <Grid container spacing={2}>
              {/* 左側のコンテナ */}
              <Grid item xs={12} sm={6} container direction="column" spacing={2}>
                <Grid item>
                  {status === 'reviewedWaiting' ? (
                    isDuePassed ? (
                      <Typography variant="body1" style={{ color: 'red' }}>
                        締め切り期限切れ
                      </Typography>
                    ) : (
                      <Typography variant="body1">
                        Review Limit: {dueDate.getFullYear()}/{dueDate.getMonth() + 1}/{dueDate.getDate()} ({daysRemaining} days remain)
                      </Typography>
                    )
                  ) : (
                    <>
                      <Impact article={article} />
                      <ThreeIcons article={article} />
                    </>
                  )}
                </Grid>
              </Grid>

              {/* 右側のコンテナ */}
              <Grid item xs={12} sm={6} container direction="column" spacing={1}>
                {status !== 'reviewedWaiting' && (
                  <>
                    <FourStars article={article} />
                  </>
                )}
                {status === 'reviewedWaiting' && !isDuePassed && (
                  <StartReview doi={article.doi} />
                )}
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
