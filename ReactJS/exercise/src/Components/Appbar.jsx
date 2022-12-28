import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Registration Form
          </Typography> 
          <Typography variant="h10" component="div" sx={{ flexGrow: 1 }}>
            Please complete the following form to register on our site. Thanks.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}