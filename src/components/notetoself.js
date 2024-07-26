import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

export default function NoteToSelf() {
  const [text, setText] = useState(''); // Initialize with an empty string or any default value

  // Handle text input changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
        // Adding minHeight to make sure it can visibly fit two rows of text
        minHeight: 150,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Leave a note to yourself ✨
      </Typography>
      <TextField
        label="Love your skin..."
        variant="outlined"
        value={text}
        onChange={handleChange}
        fullWidth
        multiline
        rows={2} // This sets the height to fit approximately two rows of text
        sx={{
          // Additional styling to make it look good
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'white',
          },
        }}
      />
    </Box>
  );
}
