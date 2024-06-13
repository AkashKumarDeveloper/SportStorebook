import React, { useState } from "react";
import {
  Modal,
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";
import soccerImage from "../../../../Assets/Images/sports-2.png";
import baseBallImage from "../../../../Assets/Images/basketball.png";
import cricketImage from "../../../../Assets/Images/sports-1.png";
import ButtonComponent from "../../../atoms/Button/Button";

const useStyles = makeStyles({
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    height: "100%",
  },
  selectedImage: {
    border: "2px solid green",
  },
  doneIcon: {
    position: "absolute",
    top: "8px",
    right: "8px",
    color: "green",
  },
  image: {
    height: "100%",
    objectFit: "contain",
  },
  modalContent: { 
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 599,
    height: 424,
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: 24,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin:"36px",
  },
});

const defaultOptions = [
  { value: "Football", image: soccerImage },
  { value: "Baseball", image: baseBallImage },
  { value: "Cricket", image: cricketImage },
];

const RadioButtonsWithImages = ({
  options = defaultOptions,
  selectedValue,
  onSelect,
}) => {
  const classes = useStyles();

  const handleImageClick = (value) => {
    onSelect(value);
  };

  return (
    <Card>
      <CardHeader title="Provide Sports Details" />
      <CardContent>
        <Typography variant="body1">
          Please select the sports you actively participate in.
        </Typography>
        <hr />
        <Grid container spacing={2}>
          {options.map((option, index) => (
            <Grid item xs={4} key={index}>
              <Box
                className={`${classes.imageContainer} ${
                  selectedValue === option.value ? classes.selectedImage : ""
                }`}
                onClick={() => handleImageClick(option.value)}
              >
                {selectedValue === option.value && (
                  <DoneIcon className={classes.doneIcon} />
                )}
                <img
                  src={option.image}
                  alt={option.value}
                  className={classes.image}
                />
                <Typography variant="body2">{option.value}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const SportsModal = ({ open, handleClose, handleBack, handleContinue }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box className={classes.modalContent}>
        <RadioButtonsWithImages
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />

        <Box className={classes.buttonContainer}>
          <ButtonComponent
            label="Save & Continue"
            size="large"
            color="#01A800"
            labelColor="#fff"
            onClick={() => {
              if (selectedValue) handleContinue(selectedValue);
            }}
            disabled={!selectedValue}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SportsModal;
