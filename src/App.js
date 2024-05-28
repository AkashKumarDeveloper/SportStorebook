import "./App.css";
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

function App() {
  return (
    <PastAssessments /> 
  );
}

export default App;
