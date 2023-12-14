import React, { useState, useEffect } from "react";
import comments from "../public/data/comments.json";
import { Paper, Typography } from '@mui/material';

function CommentList({ toSearchProp }) {
    const [filteredText, setFilteredText] = useState('');
    
    useEffect(() => {
        // Use the prop value instead of a hardcoded value
        const results = comments.filter(item => item.to === toSearchProp);
        const combinedText = results.map(item => item.text).join('\n');
        setFilteredText(combinedText);
    }, [toSearchProp]); // Add toSearchProp to the dependency array

    return (
        <div>
          {comments.filter(item => item.to === toSearchProp).map((item, index) => (
            <Paper key={index} style={{ padding: '20px', marginBottom: '10px' }}>
              <Typography variant="body2">{item.text}</Typography>
            </Paper>
          ))}
        </div>
      );
}

export default CommentList;
