import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ReportIcon from '@material-ui/icons/Report';
import logo from '../../../Assets/Images/logo.png'; // Adjust the path to your logo image

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  sideNav: {
    width: 230,
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
      borderRight: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  logoImage: {
    width: '150px', // Adjust the size as needed
    height: 'auto',
  },
  activeNavItem: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green',
    },
    '& svg': {
      color: 'white',
    },
    // Adding border radius only to the left side
    borderRadius: '50% 0 0 50%',
  },
  navItem: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
}));

const SideNavbar = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.sideNav}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" className={classes.logoImage} />
        </div>
        <List>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 0 ? classes.activeNavItem : ''}`}
            onClick={() => handleListItemClick(0)}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 1 ? classes.activeNavItem : ''}`}
            onClick={() => handleListItemClick(1)}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Assessment" />
          </ListItem>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 2 ? classes.activeNavItem : ''}`}
            onClick={() => handleListItemClick(2)}
          >
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Box>
      {/* Your main content goes here */}
    </Box>
  );
};

export default SideNavbar;
