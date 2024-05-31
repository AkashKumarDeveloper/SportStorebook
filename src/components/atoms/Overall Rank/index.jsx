import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import GaugeDesign from "../Gauge chart/GaugeChart";

const OverallRankCard = () => {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Overall Rank
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <GaugeDesign width={200} height={200} value={60} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverallRankCard;
