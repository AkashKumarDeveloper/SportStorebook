import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoneIcon from "@mui/icons-material/Done";

const useStyles = makeStyles({
  imageContainer: {
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
    position: "relative",
    cursor: "pointer", // Change cursor to pointer to indicate clickability
    marginBottom: "16px",
    textAlign: "center", // Center text below the image
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
  },
});

const RadioButtonsWithImages = ({ options, selectedValue, onChange }) => {
  console.log("options>>>>>>", options);
  const classes = useStyles();

  const handleImageClick = (value) => {
    onChange(value);
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
                className={`${classes.imageContainer} ${selectedValue === option.value && classes.selectedImage}`}
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
                <Typography variant="body2">{option.value}</Typography>{" "}
                {/* Display sport name */}
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

export default RadioButtonsWithImages;
