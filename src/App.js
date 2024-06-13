import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/Pages/Page 1/index.jsx";
import Dashboardpage from "./components/Molecule/DashboardPage/index.jsx";
import AssesmentPage from "./components/Molecule/AssesmentPage/index.jsx";
import ReportsPage from "./components/Molecule/ReportsPage/index.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import MultiStepForm from "./components/Molecule/CompleteStepForm/multiStepform.jsx";
import WithoutNav from "./components/Routes/WithOutNav.jsx";
import WithNav from "./components/Routes/WithNav.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import routes from "./Utils/Routes.js";

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

const App = () => {
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
    <GoogleOAuthProvider clientId="731867575673-9b42sahsgoc9b4npevun3fak6qvids02.apps.googleusercontent.com">
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <Router>
          <Routes>
            {routes.map(({ path, element, nav }) => (
              <Route
                element={
                  nav ? (
                    <WithNav theme={theme} toggleTheme={toggleTheme} />
                  ) : (
                    <WithoutNav />
                  )
                }
              >
                <Route path={path} element={element} />
              </Route>
            ))}
            {/* <Route element={<WithoutNav />}>
              <Route path="/" element={<MyComponent />} />
            </Route>
            <Route
              element={<WithNav theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route path="/dashboard" element={<Dashboardpage />} />
            </Route>
            <Route
              element={<WithNav theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route path="/assessment" element={<AssesmentPage />} />
            </Route>
            <Route
              element={<WithNav theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route path="/reports" element={<ReportsPage />} />
            </Route>
            <Route
              element={<WithNav theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route path="/stepForm" element={<MultiStepForm />} />
            </Route> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
