import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Modal,
} from '@mui/material';

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

const AgreementDetailModal = ({ open, handleClose, handleBack, handleContinue }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Agreement Detail
          </Typography>
          <Divider />
          <Typography variant="body1" component="p" sx={{ mt: 2, mb: 4 }}>
            I certify that all information provided in the player contract is accurate.
            This includes my name, address, date of birth. I hereby submit a satisfactory
            birth document that is acceptable to the national affiliate with which this team
            intends to advance for post season tournament play. If requested by a league
            officer, I will submit an original Authorized record of birth from the Bureau of
            Vital Statistics from the state/city/country of my birth. I hereby submit a current
            2023-2024 report card from current and enrolled school.
          </Typography>
          <FormControlLabel
            control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
            label="I accept the terms & conditions"
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" sx={{ mr: 2 }} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={!termsAccepted}
              onClick={handleContinue}
            >
              Save & Continue
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Modal>
  );
};

export default AgreementDetailModal;
