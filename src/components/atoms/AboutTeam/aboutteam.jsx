import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const TeamCardContainer = styled(Card)({
  width: '296px',
  height: '296px',
  padding: '4px',
  boxSizing: 'border-box',
  textAlign: 'center',
  marginTop:"16px"
});

const TeamLogo = styled('img')({
  width: '100px',
  height: '100px',
  margin: '0 auto',
});

const InfoBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '16px',
});

const AboutTeamCard = () => {
  return (
    <TeamCardContainer>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          About Team
        </Typography>
        <TeamLogo src="https://via.placeholder.com/100" alt="Team Logo" />
        <Typography variant="h5" color="green" style={{ marginTop: '8px' }}>
          Denver Broncos
        </Typography>
        <InfoBox>
          <Box>
            <Typography variant="body2" color="textSecondary">
              Total Players
            </Typography>
            <Typography variant="h6">25</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">
              Created Date
            </Typography>
            <Typography variant="h6">22-May-2020</Typography>
          </Box>
        </InfoBox>
      </CardContent>
    </TeamCardContainer>
  );
};

export default AboutTeamCard;
