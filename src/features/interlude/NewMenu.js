import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function NewMenu(props) {
  const [anchorEl, setAnchorEl] = useState(props.anchorEl);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('i exist')

  return (
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Create New Interlude</MenuItem>
        <MenuItem onClick={handleClose}>Join Interlude</MenuItem>
        
      </Menu>
  );
}