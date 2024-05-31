import "./App.css";
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./components/Pages/Page 1/index.jsx";
import SignupModal from "./components/Molecule/Modals/SignUp modal/SignUp.jsx";
import RadioButtonsWithImages from "./components/Molecule/Modals/Radio Buttons/RadioButtons.jsx";
import FootballDetailsModal from "./components/Molecule/Modals/Details/details.jsx";
import PersonalDetailsCard from "./components/Molecule/Modals/PersonalDetails/PersonalDetails.jsx";
import ParentInformationCard from "./components/Molecule/Modals/ParentInformation/Parentinformation.jsx";
import AgreementDetailCard from "./components/Molecule/Modals/Agreement/Agreement.jsx";
import RegistrationSuccessCard from "./components/Molecule/Modals/SucessfullRegistraion/Sucessregistration.jsx";
import SideNavbar from "./components/Pages/Page 2/index.jsx";
import PlayerTable from "./components/atoms/Table/table.jsx";
import CoachDetails from "./components/atoms/Coach/index.jsx";
import SwipeableTextMobileStepper from "./components/atoms/Caraousel/Caraousel.jsx";
import AboutTeamCard from "./components/atoms/AboutTeam/aboutteam.jsx";
import PersonalInfoCard from "./components/atoms/playerInformation/playerinformation.jsx";
import CarouselComponent from "./components/atoms/Carousel/index.jsx";
import Dashboardpage from "./components/Molecule/DashboardPage/index.jsx";
import SportsProfile from "./components/atoms/Sportsprofile/sportsprofile.jsx";
import AssessmentTable from "./components/atoms/AssesmentTable/Assesment.jsx";
import PastAssessments from "./components/atoms/PastAssesments/pastAssesments.jsx";
import Player from "./components/atoms/playerStrength&weakness/index.jsx";
import PlayerCard from "./components/atoms/PlayerSkillAssesment/index.jsx";
import players from "../src/Assets/palyers/players.json";
import OverallRankCard from "./components/atoms/Overall Rank/index.jsx";
import CustomCard from "./components/atoms/CustomCardLine/index.jsx";
import CustomCardWithRadar from "./components/atoms/radarchartCardLine/index.jsx";
import CustomCardWithPolar from "./components/atoms/IntellectualCard/index.jsx";
import Appy from "./components/atoms/ComprehensiveCard/index.jsx";
import Apply from "./components/atoms/Concept map card/index.jsx";
import AssesmentPage from "./components/Molecule/AssesmentPage/index.jsx";
import ReportsPage from "./components/Molecule/ReportsPage/index.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
;


const useStyles = makeStyles(() => ({
  appContainer: {
    display: "flex",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    marginLeft: 230,
    overflow:"auto",
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
          </Routes>
        </main>
      </div>
    </Router>
    </ThemeProvider>
  );
};
    

export default App;
