import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { styled } from "@mui/system";
import WarningIcon from "@mui/icons-material/Warning";
import { useNavigate } from "react-router-dom";

const CardContainer = styled(Card)({
  width: "340px",
  height: "480px",
  padding: "7px",
  boxSizing: "border-box",
});

const ProgressBox = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "16px",
});

const CircularProgressWithLabel = (props) => (
  <ProgressBox>
    <CircularProgress
      variant="determinate"
      {...props}
      sx={{
        width: "148px !important",
        height: "99px !important",
        color: "#00A701",
      }}
    />
    <Box
      sx={{
        top: "50%",
        left: "50%",
        transform: "translate(-14%, -65%)",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="div" sx={{ color: "#00A701" }}>
        {`${Math.round(props.value)}%`}
      </Typography>
    </Box>
  </ProgressBox>
);

const CompleteProfileLink = styled(Box)({
  cursor: "pointer",
  textAlign: "right",
  marginBottom: "8px",
});

const PersonalInfoCard = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/stepForm");
    // logic to navigate to another page
    console.log("Navigating to complete profile page...");
  };

  return (
    <CardContainer>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <CompleteProfileLink onClick={handleProfileClick}>
          <Alert
            severity="warning"
            icon={<WarningIcon />}
            style={{ backgroundColor: "#fffff" }}
          >
            <AlertTitle>Please complete your profile</AlertTitle>
          </Alert>
        </CompleteProfileLink>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "8px", color: "#00A701" }}
        >
          Completed Profile 40%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={40}
          style={{ height: "10px", borderRadius: "18px" }}
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#00A701",
            },
          }}
        />
        <Box my={2}>
          <Typography variant="body1">Name: Male</Typography>
          <Typography variant="body1">Email: adamsmith@gmail.com</Typography>
          <Typography variant="body1">Phone: +1-23456-7890</Typography>
          <Typography variant="body1">Sports Name: Football</Typography>
          <Typography variant="body1">Last Assessment: 15-Feb-2024</Typography>
        </Box>
        <Box>
          <CircularProgressWithLabel value={60} />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              textAlign: "center",
              marginTop: "-40px",
              marginRight: "103px",
            }}
          >
            Overall Rank
          </Typography>
        </Box>
      </CardContent>
    </CardContainer>
  );
};

export default PersonalInfoCard;
