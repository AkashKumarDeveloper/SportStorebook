import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Signup from "../../Molecule/SignUp/SignUp";
import ButtonComponent from "../../atoms/Button/Button";
import SignupModal from "../../Molecule/Modals/SignUp modal/SignUp";
import SportsModal from "../../Molecule/Modals/Radio Buttons/RadioButtons";
import FootballDetailsModal from "../../Molecule/Modals/Details/details";
import PersonalDetailsCard from "../../Molecule/Modals/PersonalDetails/PersonalDetails";
import ParentInformationCard from "../../Molecule/Modals/ParentInformation/Parentinformation";
import ParentInformationCardSupplemental from "../../Molecule/Modals/supplemental/supplemental";
import AgreementDetailModal from "../../Molecule/Modals/Agreement/Agreement";
import RegistrationSuccessModal from "../../Molecule/Modals/SucessfullRegistraion/Sucessregistration";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  firstGrid: {
    backgroundImage: `url(${require("../../../Assets/Images/left-login.png")})`,
    backgroundSize: "67%",
    backgroundPosition: "0% 25%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: 2,
    backgroundColor: "#EFF4F0",
    height: "150vh",
  },
  logo: {
    position: "absolute",
    top: "47px",
    left: "72px",
    zIndex: 3,
  },
  secondGrid: {
    backgroundImage: `url(${require("../../../Assets/Images/green-bg.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: 1,
    height: "150vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "end",
  },
  cardContainer: {
    position: "absolute",
    top: "70%",
    left: "39%",
    transform: "translate(-44%, -50%)",
    textAlign: "center",
    zIndex: 999,
    width: "300px",
  },
  card: {
    backgroundColor: "transparent",
    padding: theme.spacing(3),
  },
  heading: {
    color: "#4B3582",
    marginBottom: theme.spacing(2),
  },
}));

const MyComponent = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);
  useEffect(() => {
    console.log("setup>>", step);
  }, [step]);
  const handleClose = () => {
    setStep(0);
    setIsModalOpen(false);
  };

  const handleSignupClick = () => {
    setIsModalOpen(true);
    setStep(0);
  };

  const handleSuccessClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6} className={classes.firstGrid}>
        <img
          src={require("../../../Assets/Images/logo.png")}
          alt="Logo"
          className={classes.logo}
        />
      </Grid>
      <Grid item xs={6} className={classes.secondGrid}>
        <div style={{ margin: "40px" }}>
          <ButtonComponent
            width="auto"
            label="Login"
            size="large"
            borderRadius="4px"
            color="#ffffff"
            labelColor="green"
            src={require("../../../Assets/Images/login-icon.png")}
            onClick={() => {
              console.log("Deepak is cool");
            }}
          />
        </div>
      </Grid>
      <div className={classes.cardContainer}>
        <Signup onSignupClick={handleSignupClick} />
      </div>
      {isModalOpen && (
        <>
          {step === 0 && (
            <SignupModal
              open={true}
              handleClose={handleClose}
              handleContinue={handleNext}
            />
          )}
          {step === 1 && (
            <SportsModal
              open={true}
              handleClose={handleClose}
              handleContinue={handleNext}
            />
          )}
          {step === 2 && (
            <FootballDetailsModal
              open={true}
              handleClose={handleClose}
              handleBack={handleBack}
              handleContinue={handleNext}
            />
          )}
          {step === 3 && (
            <PersonalDetailsCard
              open={true}
              handleClose={handleClose}
              handleBack={handleBack}
              handleContinue={handleNext}
            />
          )}
          {step === 4 && (
            <ParentInformationCard
              open={true}
              handleClose={handleClose}
              handleBack={handleBack}
              handleContinue={handleNext}
            />
          )}
          {step === 5 && (
            <ParentInformationCardSupplemental
              open={true}
              handleClose={handleBack}
              handleContinue={handleNext}
            />
          )}
          {step === 6 && (
            <AgreementDetailModal
              open={true}
              handleClose={handleBack}
              handleContinue={handleNext}
              handleBack={handleBack}
            />
          )}
          {step === 7 && (
            <RegistrationSuccessModal
              open={true}
              handleClose={handleSuccessClose}
            />
          )}
        </>
      )}
    </Grid>
  );
};

export default MyComponent;
