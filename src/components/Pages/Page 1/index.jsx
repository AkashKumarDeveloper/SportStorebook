import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Signup from "../../Molecule/SignUp/SignUp";
import ButtonComponent from "../../atoms/Button/Button";

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
    position: "relative", // Maintain position relative for z-index
    zIndex: 2, // Ensure the grid is above the card
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
    position: "relative", // Maintain position relative for z-index
    zIndex: 1, // Ensure the grid is above the card
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
    zIndex: 999, // Ensure the card is above other content
    width: "300px", // Adjust width of the card container as needed
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

  return (
    <Grid container className={classes.container}>
      {/* First 6 grid */}
      <Grid item xs={6} className={classes.firstGrid}>
        <img
          src={require("../../../Assets/Images/logo.png")}
          alt="Logo"
          className={classes.logo}
        />
        {/* Content for the first 6 grid */}
      </Grid>
      {/* Second 6 grid */}
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
      {/* Card container */}
      <div className={classes.cardContainer}>
        <Signup />
      </div>
    </Grid>
  );
};

export default MyComponent;
