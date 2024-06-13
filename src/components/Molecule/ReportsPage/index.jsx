import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import PlayerCard from "../../atoms/PlayerSkillAssesment/index";
import OverallRankCard from "../../atoms/Overall Rank/index";
import CustomCard from "../../atoms/CustomCardLine/index";
import CustomCardWithRadar from "../../atoms/radarchartCardLine/index";
import CustomCardWithPolar from "../../atoms/IntellectualCard/index";
import Appy from "../../atoms/ComprehensiveCard/index";

const ReportsPage = () => {
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "80vw",
        marginLeft: 30,
        padding: 2,
        border: 1,
        borderColor: "grey.300",
        borderRadius: 1,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h4">Report Detail</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          container
          justifyContent="flex-end"
          spacing={2}
        >
          <Grid item>
            <FormControl>
              <InputLabel id="select-month-label">Select Month</InputLabel>
              <Select
                className="selectMonth"
                labelId="select-month-label"
                value={month}
                label="Select Month"
                onChange={handleMonthChange}
                sx={{ minWidth: 120 }}
              >
                <MenuItem value={"January"}>January</MenuItem>
                <MenuItem value={"February"}>February</MenuItem>
                <MenuItem value={"March"}>March</MenuItem>
                <MenuItem value={"April"}>April</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"June"}>June</MenuItem>
                <MenuItem value={"July"}>July</MenuItem>
                <MenuItem value={"August"}>August</MenuItem>
                <MenuItem value={"September"}>September</MenuItem>
                <MenuItem value={"October"}>October</MenuItem>
                <MenuItem value={"November"}>November</MenuItem>
                <MenuItem value={"December"}>December</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel id="select-year-label">Select Year</InputLabel>
              <Select
                className="selectYear"
                labelId="select-year-label"
                value={year}
                label="Select Year"
                onChange={handleYearChange}
                sx={{ minWidth: 120 }}
              >
                <MenuItem value={"2021"}>2021</MenuItem>
                <MenuItem value={"2022"}>2022</MenuItem>
                <MenuItem value={"2023"}>2023</MenuItem>
                <MenuItem value={"2024"}>2024</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Download Report
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8}>
          <PlayerCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <OverallRankCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCardWithRadar />
        </Grid>
        <Grid item xs={12}>
          <CustomCardWithPolar />
        </Grid>
        <Grid item xs={12}>
          <Appy />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
