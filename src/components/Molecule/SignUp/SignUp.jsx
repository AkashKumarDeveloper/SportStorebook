import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
            setSubmittedValues(values); // Store the submitted values in state
            onSignupClick(); // Open the modal
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <DynamicInputField
                icon={<PermIdentityOutlinedIcon />}
                placeholder="Player First Name"
                width="100%"
                height="50px"
                marginBottom="25px"
                borderRadius="7px"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
              <DynamicInputField
                icon={<PermIdentityOutlinedIcon />}
                placeholder="Player Last Name"
                width="100%"
                height="50px"
                borderRadius="7px"
                marginBottom="25px"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
              <DynamicInputField
                icon={<PhoneOutlinedIcon />}
                placeholder="Phone Number"
                width="100%"
                height="50px"
                borderRadius="7px"
                marginBottom="25px"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error"
              />
              <DynamicInputField
                icon={<AlternateEmailOutlinedIcon />}
                placeholder="Player Email"
                width="100%"
                height="50px"
                borderRadius="7px"
                marginBottom="25px"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="div" className="error" />
              <DynamicInputField
                icon={<LockOutlinedIcon />}
                placeholder="Password"
                width="100%"
                height="50px"
                borderRadius="7px"
                marginBottom="25px"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage name="password" component="div" className="error" />
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
        <div className={classes.googleSignup}>
          <img
            src={require("../../../Assets/Images/gmail.png")}
            alt="Gmail"
            style={{ marginRight: "15px" }}
          />
          <Typography variant="body1" style={{ color: "#3B474A" }}>
            Sign up with Google
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signup;
