import React from "react";
import { Modal, Box, Typography, Divider } from "@mui/material";
import SuccessImage from "../../../../Assets/Images/tick-mark.png";
import ButtonComponent from "../../../atoms/Button/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 512,
  height: 362,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "23px",
  border: "2px solid #FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  outline: "none",
};

const headingStyle = {
  fontFamily: "GT America Trial",
  fontWeight: "bold",
  fontSize: "35px",
  lineHeight: "44px",
  letterSpacing: "0px",
  color: "#01A800",
  opacity: 1,
};

const SignupModal = ({ open, handleClose, handleContinue }) => {
  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={modalStyle}>
        <div>
          <img
            src={SuccessImage}
            alt="Success"
            style={{ width: "100px", marginBottom: "20px" }}
          />
        </div>
        <div>
          <Typography
            variant="h4"
            component="h2"
            sx={headingStyle}
            gutterBottom
          >
            Sign Up Successfully
          </Typography>
          <Typography variant="body1" gutterBottom>
            To provide additional information about the player <br />
            and sports-related details, kindly proceed by <br />
            selecting the "continue" button.
          </Typography>
        </div>

        <Divider style={{ width: "100%" }} />
        <ButtonComponent
          label="Continue"
          size="large"
          borderRadius="4px"
          color="#01A800"
          labelColor="#E0F5E0"
          onClick={handleContinue}
        />
      </Box>
    </Modal>
  );
};

export default SignupModal;
