import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import ButtonComponent from "../../../atoms/Button/Button"; 

const styles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "590px",
    height: "537px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formControl: {
    margin: "10px 0px",
    width: "100%",
  },
  hrStyle: {
    margin: "16px 0",
    borderColor: "#000",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
    gap: "10px",
  },
};

const roles = ["Striker", "Midfielder", "Defender", "Goalkeeper"];
const positions = ["Left Wing", "Right Wing", "Center", "Full Back"];

const FootballDetailsModal = ({ open, handleClose,handleContinue }) => {
  const handleBack = () => {
    // Implement the back button functionality here
    console.log("Back button clicked");
  };
  const handleSaveContinue = () => {
    handleContinue()
    console.log("Save & Continue button clicked");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.modalStyle}>
        <div>
          <Typography variant="h6" component="h2" gutterBottom>
            Football / Soccer Details
          </Typography>
          <hr style={styles.hrStyle} />
          <div>
            <Typography>Primary Role</Typography>
            <TextField
              select
              label="Primary Role"
              sx={styles.formControl}
              variant="outlined"
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Typography>Other Positions</Typography>
            <TextField
              select
              label="Other Positions"
              sx={styles.formControl}
              variant="outlined"
            >
              {positions.map((position) => (
                <MenuItem key={position} value={position}>
                  {position}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Typography>Primary Position</Typography>
            <TextField
              select
              label="Primary Position"
              sx={styles.formControl}
              variant="outlined"
            >
              {positions.map((position) => (
                <MenuItem key={position} value={position}>
                  {position}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Typography>Profile Video Link</Typography>
            <TextField
              label="Profile Video Link"
              variant="outlined"
              sx={styles.formControl}
            />
          </div>
        </div>
        <hr style={styles.hrStyle} />
        <Box sx={styles.buttonContainer}>
          <ButtonComponent
            label="Back"
            size="large"
            color="#011A1E"
            labelColor="#fff"
            onClick={handleBack}
          />
          <ButtonComponent
            label="Save & Continue"
            size="large"
            color="#01A800"
            labelColor="#fff"
            onClick={handleSaveContinue}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default FootballDetailsModal;
