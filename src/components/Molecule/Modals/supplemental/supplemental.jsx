import React from "react";
import {
  Box,
  Button,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Divider,
  FormControl,
  Modal,
} from "@mui/material";
import ButtonComponent from "../../../atoms/Button/Button";

const labelStyle = {
  marginBottom: "4px", // Adjust this value to get the desired spacing
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 630,
  height: 520,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  overflow: "auto",
};

const ParentInformationCardSupplemental = ({
  open,
  handleClose,
  handleBack,
  handleContinue,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Parent/Guardian Information (Supplemental Contact)
          </Typography>
          <Divider />
          <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
            <Grid item xs={6}>
              <InputLabel shrink sx={labelStyle}>
                First Name
              </InputLabel>
              <TextField fullWidth />
              <InputLabel shrink sx={labelStyle}>
                Email
              </InputLabel>
              <TextField fullWidth type="email" />
              <InputLabel shrink sx={labelStyle}>
                Country
              </InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="australia">Australia</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink sx={labelStyle}>
                City
              </InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="sydney">Sydney</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <InputLabel shrink sx={labelStyle}>
                Last Name
              </InputLabel>
              <TextField fullWidth />
              <InputLabel shrink sx={labelStyle}>
                Phone No
              </InputLabel>
              <TextField fullWidth type="tel" />
              <InputLabel shrink sx={labelStyle}>
                State
              </InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="dl">Delhi</MenuItem>
                  <MenuItem value="nsw">New South Wales</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink sx={labelStyle}>
                Pincode
              </InputLabel>
              <TextField fullWidth type="number" />
            </Grid>
          </Grid>
          <InputLabel shrink sx={labelStyle}>
            Address
          </InputLabel>
          <TextField fullWidth />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
              gap: "10px",
            }}
          >
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
              onClick={handleContinue}
            />
          </Box>
        </CardContent>
      </Box>
    </Modal>
  );
};

export default ParentInformationCardSupplemental;
