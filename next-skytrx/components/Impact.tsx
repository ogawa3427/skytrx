import React from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

const Impact = ({ article }) => {
    return (
    <Grid item container alignItems="center">
        <Typography variant="h6">Impact</Typography>
        <Rating name="Impact" value={parseFloat(article.impact)} readOnly  precision={0.5} />
        <Typography variant="h6">{parseFloat(article.impact)}</Typography>
    </Grid>
    );
};

export default Impact;