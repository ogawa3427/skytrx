import React from "react";
import { Grid, Typography } from "@mui/material";
import StartReview from "./StartReview";

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

const WhLimit = ({ article }) => {
  // 日付を作成し、4ヶ月を加算
  const dueDate = addMonths(new Date(article.year, article.month - 1, article.day), 4);
  // 期限までの日数を計算
  const daysRemaining = calculateDaysRemaining(dueDate);

  const isDuePassed = daysRemaining < 0;

  return (
    <Grid item container alignItems="center">
      {isDuePassed ? (
        <Typography variant="h6" style={{ color: 'red' }}>
          締め切り期限切れ
        </Typography>
      ) : (
        <Grid container direction="row" justifyContent="space-between">
            <Typography variant="h6">
              Review Limit: {dueDate.getFullYear()}/{dueDate.getMonth() + 1}/{dueDate.getDate()} ({daysRemaining} days remain)
            </Typography>
            <StartReview doi={article.doi} />
        </Grid>
      )}
    </Grid>
  );
}

export default WhLimit;