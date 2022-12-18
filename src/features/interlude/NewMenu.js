import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function NewMenu(props) {
  const navigate = useNavigate()


  return (
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={props.anchorEl}
        open={true}
        onClose={()=>props.handleClose()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>navigate('/home/new')}>Create New Interlude</MenuItem>
        <MenuItem onClick={()=>navigate('/home/join')}>Join Interlude</MenuItem>
        
      </Menu>
  );
}