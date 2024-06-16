import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer({ isDrawerOpen, handleToggleDrawer }) {
  const [open, setOpen] = React.useState(false);
  

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const listItems = [
    { text: 'Home', icon: <HomeIcon />, url:'' },
    { text: 'About', icon: <InfoIcon />, url:'about' },
    { text: 'Contact', icon: <CallIcon />, url:'contact' },
    { text: 'Projects', icon: <GitHubIcon />, url:'projects' },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleToggleDrawer}>
      <List>
        {listItems.map((item) => (
          <ListItem to={item.url} component={Link} key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', height: '100vh' }}>
      <Button onClick={handleToggleDrawer}>Open drawer</Button>
    </Box>
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
TemporaryDrawer.propTypes = {
  isDrawerOpen: PropTypes.bool, handleToggleDrawer: PropTypes.func
}