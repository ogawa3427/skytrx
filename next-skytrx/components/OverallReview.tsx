import react from 'react';
import { Typography, TextField, Rating } from '@mui/material';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const OverallReview = ({doi}) => {
    return (
        <div>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Grid container>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Overall Review</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Overall Review"
                        multiline
                        rows={4}
                        defaultValue=""
                        style={{ width: '100%' }}
                    />
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h6">Novelty</Typography>
                            </Grid>
                            <Grid item>
                                <Rating name="overall-rating" defaultValue={0} />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h6">Originality</Typography>
                            </Grid>
                            <Grid item>
                                <Rating name="overall-rating" defaultValue={0} />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h6">Validity</Typography>
                            </Grid>
                            <Grid item>
                                <Rating name="overall-rating" defaultValue={0} />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h6">Ethics</Typography>
                            </Grid>
                            <Grid item>
                                <Rating name="overall-rating" defaultValue={0} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>You wii get</Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>5 SCIC</Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>if your review confirmed</Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>（You can get more SCIC if you review more）</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default OverallReview;