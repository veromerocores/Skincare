import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; 

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/froga" style={{ color: 'black', textDecoration: 'none' }}>FroGa</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/yoga" style={{ color: 'black', textDecoration: 'none' }}>Yoga Search</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/wisdom" style={{ color: 'black', textDecoration: 'none' }}>Wisdom</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link></MenuItem>
      </Menu>
    </div>
  );
}
