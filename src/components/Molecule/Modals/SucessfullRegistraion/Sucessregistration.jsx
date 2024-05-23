import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  Modal,
} from '@mui/material';
import TickMarkImage from '../../../../Assets/Images/tick-mark.png'; // Adjust the path as per your project structure

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const RegistrationSuccessModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent sx={{ textAlign: 'center' }}>
          <img src={TickMarkImage} alt="Tick Mark" style={{ width: 48, height: 48, marginBottom: 2 }} />
          <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
            Player Registered Successfully
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 4 }}>
            Your registration is confirmed! Please check your inbox for a confirmation email with all the details.
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Continue
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Modal>
  );
};

export default RegistrationSuccessModal;
