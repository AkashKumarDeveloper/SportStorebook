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

const useStyles = makeStyles({
  imageContainer: {
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
    position: "relative",
    cursor: "pointer",
    marginBottom: "16px",
    textAlign: "center",
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
    width: "100px",
    height: "auto",
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

const SportsModal = ({ open, handleClose, handleContinue }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.modalContent}>
        <RadioButtonsWithImages
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleClose}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (selectedValue) handleContinue();
            }}
            disabled={!selectedValue}
          >
            Continue
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default SportsModal;
