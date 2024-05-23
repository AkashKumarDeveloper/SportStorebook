import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  FormControl,
  Modal,
} from '@mui/material';
import UploadImage from '../../../../Assets/Images/1.png';

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

const PersonalDetailsCard = ({ open, handleClose, handleBack, handleContinue }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Please provide Personal Details
          </Typography>
          <Divider />
          <Box
            sx={{
              border: '2px dashed grey',
              borderRadius: 1,
              textAlign: 'center',
              p: 2,
              mt: 2,
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={UploadImage}
              alt="Upload Image"
              sx={{ width: 48, height: 48 }}
            />
            <Typography variant="body1">Upload Image</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel shrink>Joining Date</InputLabel>
              <TextField
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <InputLabel shrink>Date of Birth</InputLabel>
              <TextField
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <InputLabel shrink>Height</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value={150}>150 cm</MenuItem>
                  <MenuItem value={160}>160 cm</MenuItem>
                  <MenuItem value={170}>170 cm</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink>Country</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="australia">Australia</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink>City</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="sydney">Sydney</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <InputLabel shrink>Gender</InputLabel>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid grey',
                    borderRadius: 1,
                    p: 1,
                    flexGrow: 1,
                    mr: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ mr: 1 }}>Male</Typography>
                  <Radio value="male" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid grey',
                    borderRadius: 1,
                    p: 1,
                    flexGrow: 1,
                    ml: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ mr: 1 }}>Female</Typography>
                  <Radio value="female" />
                </Box>
              </Box>
              <InputLabel shrink>Age</InputLabel>
              <TextField
                type="number"
                fullWidth
              />
              <InputLabel shrink>Weight</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value={50}>50 kg</MenuItem>
                  <MenuItem value={60}>60 kg</MenuItem>
                  <MenuItem value={70}>70 kg</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink>State</InputLabel>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value="ny">New York</MenuItem>
                  <MenuItem value="dl">Delhi</MenuItem>
                  <MenuItem value="nsw">New South Wales</MenuItem>
                </Select>
              </FormControl>
              <InputLabel shrink>Pincode</InputLabel>
              <TextField
                fullWidth
              />
            </Grid>
          </Grid>
          <InputLabel shrink>Address</InputLabel>
          <TextField
            fullWidth
          />
          <InputLabel shrink>Video ID</InputLabel>
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

export default PersonalDetailsCard;
