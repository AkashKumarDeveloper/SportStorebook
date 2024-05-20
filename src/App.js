import "./App.css";
import MyComponent from "./components/Pages/Page 1/index.jsx";
import SignupModal from "./components/Molecule/Modals/SignUp modal/SignUp.jsx";
import RadioButtonsWithImages from "./components/Molecule/Modals/Radio Buttons/RadioButtons.jsx";
import FootballDetailsModal from "./components/Molecule/Modals/Details/details.jsx"

function App() {
  return <FootballDetailsModal open={true} />;
}

export default App;
