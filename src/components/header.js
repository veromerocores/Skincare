import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Use navigate hook
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToSkincarePlanner = () => {
    navigate('/planner'); 
    handleClose();
  };

  const goToQuestionnaire = () => {
    navigate('/questionnaire');
    handleClose();
  };

  const goToHome = () => {
    navigate('/home');
    handleClose();
  };

  return (
    <React.Fragment>
      <Box className='header'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', p: 2 }}>
          <Box>
            <a role="button" className='logo' tabIndex={0} href="/home">SkinPlan</a>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ minWidth: 100 }}><a className='links' href='/about'>About</a></Typography>
            <Typography sx={{ minWidth: 100 }}><a className='links' href='/search'>Search</a></Typography>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ background: '#F4E2E2', width: 32, height: 32 }}>Sk</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={goToSkincarePlanner}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Skincare Planner
        </MenuItem>
        <MenuItem onClick={goToQuestionnaire}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Questionnaire
        </MenuItem>
        <MenuItem onClick={goToHome}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};