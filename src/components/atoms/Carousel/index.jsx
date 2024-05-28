import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BrightonLogo from "../../../Assets/Images/images.jpg";
import ManchesterUnitedLogo from "../../../Assets/Images/ce973b0b53616fb92a9dc2d7acf90557.jpg";
import './caraousel.css'; // Import custom CSS

const matches = [
  {
    id: 1,
    team1: "Brighton and Hove Albion",
    team1Logo: BrightonLogo,
    team2: "Manchester United",
    team2Logo: ManchesterUnitedLogo,
    date: "Sunday, 28-Jan-2024",
    time: "08:24 PM",
    location: "Lusail Iconic Stadium, Qatar",
  },
  {
    id: 2,
    team1: "Brighton and Hove Albion",
    team1Logo: BrightonLogo,
    team2: "Manchester United",
    team2Logo: ManchesterUnitedLogo,
    date: "Sunday, 28-Jan-2024",
    time: "08:24 PM",
    location: "Lusail Iconic Stadium, Qatar",
  },
  {
    id: 3,
    team1: "Brighton and Hove Albion",
    team1Logo: BrightonLogo,
    team2: "Manchester United",
    team2Logo: ManchesterUnitedLogo,
    date: "Sunday, 28-Jan-2024",
    time: "08:24 PM",
    location: "Lusail Iconic Stadium, Qatar",
  },
];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
  };

  return (
    <Card sx={{ height: 268, width: 662 }}>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h6">Upcoming Matches</Typography>
          <Typography variant="h6" color="primary">Premier League</Typography>
        </Box>
        <Slider {...settings} className="slider">
          {matches.map((match) => (
            <Box key={match.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={match.team1Logo} alt={`${match.team1} logo`} style={{ width: 60, height: 60, objectFit: 'contain' }} />
                    <Typography variant="h6" sx={{ marginLeft: 2 }}>
                      {match.team1}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    VS
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ marginRight: 2 }}>
                      {match.team2}
                    </Typography>
                    <img src={match.team2Logo} alt={`${match.team2} logo`} style={{ width: 60, height: 60, objectFit: 'contain' }} />
                  </Box>
                </CardContent>
                <CardContent sx={{ textAlign: 'center', padding: 0 }}>
                  <Typography variant="body1">{match.date}</Typography>
                  <Typography variant="body1">{match.time}</Typography>
                  <Typography variant="body1">{match.location}</Typography>
                  <Typography variant="body1" color="primary">
                    {match.competition}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Card>
  );
};

export default CarouselComponent;
