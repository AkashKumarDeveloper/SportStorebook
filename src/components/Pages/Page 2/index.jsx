import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Switch,
  Typography,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReportIcon from "@material-ui/icons/Report";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png"; // Adjust the path to your logo image

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100vh",
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      borderRight: "none",
      borderBottom: `1px solid ${theme.palette.divider}`,
      position: "static",
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  logoImage: {
    width: "150px", // Adjust the size as needed
    height: "auto",
  },
  activeNavItem: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
    "& svg": {
      color: "white",
    },
    // Adding border radius only to the left side
    borderRadius: "50% 0 0 50%",
  },
  navItem: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  bottomButtons: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  toggleButton: {
    marginBottom: theme.spacing(1),
  },
  logoutButton: {
    marginTop: theme.spacing(2),
  },
  divider: {
    width: "80%",
    margin: "10px auto",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLabel: {
    fontSize: "12px",
  },
}));

const SideNavbar = ({ theme, toggleTheme }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <Box className={classes.root}>
      <div>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" className={classes.logoImage} />
        </div>
        <List>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 0 ? classes.activeNavItem : ""}`}
            onClick={() => handleListItemClick(0)}
            component={Link}
            to="/dashboard"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 1 ? classes.activeNavItem : ""}`}
            onClick={() => handleListItemClick(1)}
            component={Link}
            to="/assessment"
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Assessment" />
          </ListItem>
          <ListItem
            button
            className={`${classes.navItem} ${activeIndex === 2 ? classes.activeNavItem : ""}`}
            onClick={() => handleListItemClick(2)}
            component={Link}
            to="/reports"
          >
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </div>
      <div className={classes.bottomButtons}>
        <Divider className={classes.divider} />
        <div className={classes.toggleContainer}>
          <Typography variant="caption">View Mode</Typography>
          <Switch
            checked={isDarkMode}
            onChange={handleToggleChange}
            name="themeToggle"
            color="primary"
          />
          <Typography variant="caption">
            {isDarkMode ? "Dark" : "Light"}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <ListItem
          button
          className={`${classes.navItem} ${classes.logoutButton}`}
          component={Link}
          to="/logout"
        >
          <ListItemIcon className={classes.iconContainer}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.iconLabel}>Logout</Typography>
            }
          />
        </ListItem>
      </div>
    </Box>
  );
};

export default SideNavbar;
