import React from "react";
import { Modal, Box, Typography, TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../../../atoms/Button/Button";

const styles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "590px",
    maxHeight: "560px",
    height: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "2%",
    overflow: "auto",
  },
  formControl: {
    margin: "10px 0px",
    width: "100%",
    padding: "0",
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
  textField: {
    "& .MuiInputBase-root": {
      height: "40px",
    },
  },
};

const menuItemStyles = {
  padding: 0,
};

const sportsDetails = {
  Football: {
    title: "Football / Soccer Details",
    roles: ["Striker", "Midfielder", "Defender", "Goalkeeper"],
    positions: ["Left Wing", "Right Wing", "Center", "Full Back"],
  },
  Baseball: {
    title: "Baseball Details",
    roles: ["Pitcher", "Catcher", "Infielder", "Outfielder"],
    positions: ["First Base", "Second Base", "Shortstop", "Third Base"],
  },
  Cricket: {
    title: "Cricket Details",
    roles: ["Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"],
    positions: ["Opener", "Middle Order", "Lower Order", "Tailender"],
  },
};

const FootballDetailsModal = ({
  open,
  handleClose,
  handleBack,
  handleContinue,
  selectedSport,
}) => {
  const sportDetail = sportsDetails[selectedSport] || {};

  const validationSchema = Yup.object().shape({
    primaryRole: Yup.string().required("Primary Role is required"),
    otherPositions: Yup.string().required("Other Positions are required"),
    primaryPosition: Yup.string().required("Primary Position is required"),
    videoLink: Yup.string()
      .required("Profile Video Link is required")
      .url("Enter a valid URL"),
  });

  const formik = useFormik({
    initialValues: {
      primaryRole: "",
      otherPositions: "",
      primaryPosition: "",
      videoLink: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleContinue();
      console.log("Form Values:", values);
    },
  });

  return (
    <Modal sx={{ overflow: "auto" }} open={open} onClose={handleClose}>
      <Box sx={styles.modalStyle}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Typography variant="h6" component="h2" gutterBottom>
              {sportDetail.title}
            </Typography>
            <hr style={styles.hrStyle} />
            <div>
              <Typography>Primary Role</Typography>
              <TextField
                select
                // label="Primary Role"
                size="small"
                name="primaryRole"
                placeholder="Primary Role"
                value={formik.values.primaryRole}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ ...styles.formControl, ...styles.textField }}
                error={
                  formik.touched.primaryRole &&
                  Boolean(formik.errors.primaryRole)
                }
                helperText={
                  formik.touched.primaryRole && formik.errors.primaryRole
                }
              >
                {sportDetail.roles &&
                  sportDetail.roles.map((role) => (
                    <MenuItem key={role} value={role} sx={menuItemStyles}>
                      {role}
                    </MenuItem>
                  ))}
              </TextField>
            </div>
            <div>
              <Typography>Other Positions</Typography>
              <TextField
                select
                // label="Other Positions"
                name="otherPositions"
                value={formik.values.otherPositions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ ...styles.formControl, ...styles.textField }}
                error={
                  formik.touched.otherPositions &&
                  Boolean(formik.errors.otherPositions)
                }
                helperText={
                  formik.touched.otherPositions && formik.errors.otherPositions
                }
              >
                {sportDetail.positions &&
                  sportDetail.positions.map((position) => (
                    <MenuItem
                      key={position}
                      value={position}
                      sx={menuItemStyles}
                    >
                      {position}
                    </MenuItem>
                  ))}
              </TextField>
            </div>
            <div>
              <Typography>Primary Position</Typography>
              <TextField
                select
                // label="Primary Position"
                name="primaryPosition"
                value={formik.values.primaryPosition}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ ...styles.formControl, ...styles.textField }}
                variant="outlined"
                error={
                  formik.touched.primaryPosition &&
                  Boolean(formik.errors.primaryPosition)
                }
                helperText={
                  formik.touched.primaryPosition &&
                  formik.errors.primaryPosition
                }
              >
                {sportDetail.positions &&
                  sportDetail.positions.map((position) => (
                    <MenuItem
                      key={position}
                      value={position}
                      sx={menuItemStyles}
                    >
                      {position}
                    </MenuItem>
                  ))}
              </TextField>
            </div>
            <div>
              <Typography>Profile Video Link</Typography>
              <TextField
                // label="Profile Video Link"
                name="videoLink"
                value={formik.values.videoLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ ...styles.formControl, ...styles.textField }}
                variant="outlined"
                error={
                  formik.touched.videoLink && Boolean(formik.errors.videoLink)
                }
                helperText={formik.touched.videoLink && formik.errors.videoLink}
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
              type="submit"
            />
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default FootballDetailsModal;
