import React from "react";

import users from "/public/data/users.json";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TiAuPuEd = ({article}) => {
    return (
        <div>
        <Typography variant="h6" component="h2" gutterBottom>
            {article.title}
        </Typography>
        <Typography variant="subtitle1" component="span" style={{ display: 'block', marginTop: '8px' }}>
            {Array.isArray(article.personalid) 
                ? article.personalid.map(id => users[id] ? users[id].name : "名前なし").join(", ")
                : users[article.personalid] ? users[article.personalid].name : "名前なし"
            }
        </Typography>
        <Box display="flex" justifyContent="flex-start" gap={2}>
            <Typography variant="body1" gutterBottom>
                Published {article.year}/{article.month}/{article.day} (JST)
            </Typography>
            <Typography variant="body1" gutterBottom>
                Last Edited {article.lastedit.split('-').join('/')} (JST)
            </Typography>
        </Box>
        </div>
    );
    };
export default TiAuPuEd;