import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  CircularProgress,
  Button,
} from '@mui/material';
import { green } from '@mui/material/colors';
import profileData from "../../../Assets/Profile/profile.json"; // Adjust the import path as needed

const ProfileSection = ({ title, data }) => (
  <Box mt={2}>
    <Typography variant="h6" color="primary">
      {title}
    </Typography>
    <Divider />
    <Grid container spacing={2} mt={2}>
      {Object.entries(data).map(([key, value]) => (
        <React.Fragment key={key}>
          <Grid item xs={6}>
            <Typography variant="body2">{key} :</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{key === "Profile Video Link" ? <a href={value}>{value}</a> : value}</Typography>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  </Box>
);

const ProfilePage = () => {
  const { profile, sportsDetail, personalDetail, primaryContact, supplementalContact } = profileData;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Main Profile Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={3}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar
                      alt={profile.name}
                      src={profile.image}
                      sx={{ width: 100, height: 100 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h5">{profile.name}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1">{profile.email}</Typography>
                    <Typography variant="body1">{profile.phone}</Typography>
                  </Box>
                  <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems="center">
                      <CircularProgress
                        variant="determinate"
                        value={profile.completionPercentage}
                        size={60}
                        sx={{ color: green[500] }}
                      />
                      <Typography variant="h6" ml={2}>
                        {profile.completionPercentage}%
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary">
                      Complete Profile
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Sports and Personal Detail */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <ProfileSection title="Sports Detail" data={sportsDetail} />
              <ProfileSection title="Personal Detail" data={personalDetail} />
            </CardContent>
          </Card>
        </Grid>

        {/* Primary and Supplemental Contact */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <ProfileSection title="Parent/Guardian (Primary Contact)" data={primaryContact} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <ProfileSection title="Parent/Guardian (Supplemental Contact)" data={supplementalContact} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
