import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboardpage from "../../Molecule/DashboardPage";
import AssesmentPage from "../../Molecule/AssesmentPage";
import ReportsPage from "../../Molecule/ReportsPage";
import MultiStepForm from "../../Molecule/CompleteStepForm/multiStepform";
import MyComponent from "../Page 1";
import SideNavbar from "../Page 2";

const useStyles = makeStyles(() => ({
  appContainer: {
    display: "flex",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    marginLeft: 230,
    overflow: "auto",
  },
}));

const SideNavbarPage = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState("light");

  const themeObject = createTheme({
    palette: {
      type: theme,
    },
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeObject}>
      <CssBaseline />
      <Router>
        <div className={classes.appContainer}>
          <SideNavbar theme={theme} toggleTheme={toggleTheme} />
          <main className={classes.content}>
            <Routes>
              <Route path="/" element={<Dashboardpage />} />
              <Route path="/assessment" element={<AssesmentPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/stepForm" element={<MultiStepForm />} />
              <Route path="/signup" element={<MyComponent />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default SideNavbarPage;
