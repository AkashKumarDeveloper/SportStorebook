import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Box,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";

import soccerImage from "../../../../Assets/Images/sports-2.png";
import baseBallImage from "../../../../Assets/Images/sports-3.png";
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
  { value: "FootBall", image: soccerImage },
  { value: "Basket Ball", image: baseBallImage },
  { value: "Cricket", image: cricketImage },
];

const RadioButtonsWithImages = ({ options = defaultOptions }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleImageClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <Card>
      <CardHeader title="Provide Sports Details" />
      <CardContent>
        <Typography variant="body1">
          Please select the sports you actively participate in.
        </Typography>
        <hr />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
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
        <hr />
        <Button variant="contained" color="primary" fullWidth>
          Save and Continue
        </Button>
      </CardContent>
    </Card>
  );
};

RadioButtonsWithImages.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

const SportsModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Sports Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modalContent}>
          <RadioButtonsWithImages />
        </Box>
      </Modal>
    </>
  );
};

export default SportsModal;
