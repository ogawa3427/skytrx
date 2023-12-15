import React from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

const Impact = ({ article }) => {
    const orig = parseFloat(article.originality);
    const eth = parseFloat(article.ethics);
    const nov = parseFloat(article.novelty);
    const val = parseFloat(article.validity);
    const imp_num = Math.round((orig + eth + nov + val) / 4 * 10) / 10;
    return (
    <Grid item container alignItems="center">
        <Typography variant="h6">Impact</Typography>
        <Rating name="Impact" value={imp_num} readOnly  precision={0.5} />
        <Typography variant="h6">{imp_num}</Typography>
    </Grid>
    );
};

export default Impact;