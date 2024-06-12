import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../../atoms/Button/Button";
import DynamicInputField from "../../atoms/Input Field/Inputfield";
import { useGoogleLogin } from "@react-oauth/google";
import { width } from "@material-ui/system";
import GreenEyeButton from "../../atoms/Green eye Icon/Greeneye";
import PasswordEyeButton from "../../atoms/passwordicon";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  },
  heading: {
    fontFamily: "GT American, sans-serif",
    fontWeight: "800",
    fontSize: "30px",
    marginBottom: "37px",
    marginTop: "34px",
    background: "linear-gradient(180deg, #5A4296 0%, #2E1A5A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: 1,
  },
  card: {
    top: "128px",
    width: "586px",
    borderRadius: "34px",
  },
  horizontalLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: "25px 0",
  },
  googleSignup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
  },
  error: {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
}));

const Signup = ({ onSignupClick }) => {
  const classes = useStyles();
  const [submittedValues, setSubmittedValues] = useState(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const loginWithGooglehandler = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => {
      console.log("Login Failed ", error);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card sx={{ borderRadius: "34px", width: "586px", top: "128px" }}>
      <CardContent className={classes.cardContent}>
        <Typography
          variant="p"
          component="p"
          className={classes.heading}
          sx={{
            marginBottom: "37px",
            marginTop: "34px",
          }}
        >
          Player Sign Up
        </Typography>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("values", values);
            setSubmittedValues(values);
            onSignupClick();
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div style={{ marginBottom: "25px" }}>
                <DynamicInputField
                  icon={<PermIdentityOutlinedIcon />}
                  placeholder="Player First Name"
                  height="50px"
                  width="100%"
                  borderRadius="7px"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className={classes.error}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <DynamicInputField
                  icon={<PermIdentityOutlinedIcon />}
                  placeholder="Player Last Name"
                  width="100%"
                  height="50px"
                  borderRadius="7px"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={classes.error}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <DynamicInputField
                  icon={<PhoneOutlinedIcon />}
                  placeholder="Phone Number"
                  width="100%"
                  height="50px"
                  borderRadius="7px"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className={classes.error}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <DynamicInputField
                  icon={<AlternateEmailOutlinedIcon />}
                  placeholder="Player Email"
                  width="100%"
                  height="50px"
                  borderRadius="7px"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.error}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <DynamicInputField
                  icon={<LockOutlinedIcon />}
                  placeholder="Password"
                  width="100%"
                  height="50px"
                  borderRadius="7px"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  endIcon={
                    <PasswordEyeButton
                      onClick={togglePasswordVisibility}
                      isPasswordVisible={showPassword}
                    />
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.error}
                />
              </div>
              <ButtonComponent
                type="submit"
                width="100%"
                label="Sign Up"
                size="large"
                borderRadius="4px"
                color="#01A800"
                labelColor="#E0F5E0"
              />
            </Form>
          )}
        </Formik>
        <hr className={classes.horizontalLine} />
        <button
          className={classes.googleSignup}
          onClick={loginWithGooglehandler}
        >
          <img
            src={require("../../../Assets/Images/gmail.png")}
            alt="Gmail"
            style={{ marginRight: "15px" }}
          />
          <Typography variant="body1" style={{ color: "#3B474A" }}>
            Sign up with Google
          </Typography>
        </button>
      </CardContent>
    </Card>
  );
};

export default Signup;
