import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Grid,
  CircularProgress,
  Divider,
  IconButton,
  Box,
  Badge,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Refresh, Share } from "@mui/icons-material";
import { green, orange, red } from "@mui/material/colors";
import { styled } from "@mui/system";

const ProgressBox = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "16px",
});

const CircularProgressWithLabel = (props) => (
  <Box sx={{ textAlign: "center", position: "relative" }}>
    <ProgressBox>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          width: "140px !important",
          height: "140px !important",
          color: "#00A701",
        }}
      />
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="div" sx={{ color: "#00A701" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </ProgressBox>
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{ marginTop: "8px", position: "absolute", top: "95px", left: "30px" }}
    >
      Overall Rank
    </Typography>
  </Box>
);

const SportsProfile = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
      <CardHeader
        title="Sports Profile"
        action={
          <Box>
            <IconButton>
              <Refresh />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Box
                  sx={{
                    backgroundColor: orange[500],
                    borderRadius: "50%",
                    padding: "0.3rem",
                  }}
                >
                  A+
                </Box>
              }
            >
              <Avatar
                alt="John Doe"
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80 }}
              />
            </Badge>
          </Grid>
          <Grid item>
            <Typography variant="body1">Name: John Doe</Typography>
            <Typography variant="body1">Age: 22</Typography>
            <Typography variant="body1">Gender: Male</Typography>
            <Typography variant="body1">Country: USA</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ color: green[700] }} gutterBottom>
          Sports Info
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <CircularProgressWithLabel value={60} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Primary Role: Defensive
            </Typography>
            <Typography variant="body1" gutterBottom>
              Height: 6ft 1inch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Primary Position: Center Back
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ color: green[700] }} gutterBottom>
              Strengths
            </Typography>
            <List sx={{ padding: 0 }}>
              {[
                "Fast Speed",
                "Logic",
                "Sustained Attention",
                "Thinking Ability",
                "Working Memory",
              ].map((strength) => (
                <ListItem key={strength} sx={{ padding: 0 }}>
                  <ListItemText primary={`• ${strength}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ color: red[700] }} gutterBottom>
              Weaknesses
            </Typography>
            <List sx={{ padding: 0 }}>
              {["Verbal Ability", "Team Work", "Cognitive Efficiency"].map(
                (weakness) => (
                  <ListItem key={weakness} sx={{ padding: 0 }}>
                    <ListItemText primary={`• ${weakness}`} />
                  </ListItem>
                )
              )}
            </List>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Coach
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: Adam Smith
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: adamsmith@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: +1-448999898
        </Typography>

        <Typography variant="h6" gutterBottom>
          Academy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: Eastern Academy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: academy@info.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: +1-234568789
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: Eastern Academy, California
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SportsProfile;
