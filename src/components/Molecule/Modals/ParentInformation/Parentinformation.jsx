import React from 'react';
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
} from '@mui/material';

const labelStyle = {
  marginBottom: '4px',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ParentInformationCard = ({ open, handleClose, handleBack, handleContinue }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Parent/Guardian Information (Primary Contact)
          </Typography>
          <Divider />
          <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
            <Grid item xs={6}>
              <InputLabel shrink sx={labelStyle}>First Name</InputLabel>
              <TextField
                fullWidth
              />
              <InputLabel shrink sx={labelStyle}>Email</InputLabel>
              <TextField
                fullWidth
                type="email"
              />
              <InputLabel shrink sx={labelStyle}>Country</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="australia">Australia</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink sx={labelStyle}>City</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="sydney">Sydney</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <InputLabel shrink sx={labelStyle}>Last Name</InputLabel>
              <TextField
                fullWidth
              />
              <InputLabel shrink sx={labelStyle}>Phone No</InputLabel>
              <TextField
                fullWidth
                type="tel"
              />
              <InputLabel shrink sx={labelStyle}>State</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="dl">Delhi</MenuItem>
                  <MenuItem value="nsw">New South Wales</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink sx={labelStyle}>Pincode</InputLabel>
              <TextField
                fullWidth
                type="number"
              />
            </Grid>
          </Grid>
          <InputLabel shrink sx={labelStyle}>Address</InputLabel>
          <TextField
            fullWidth
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" sx={{ mr: 2 }} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleContinue}>
              Save & Continue
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Modal>
  );
};

export default ParentInformationCard;
