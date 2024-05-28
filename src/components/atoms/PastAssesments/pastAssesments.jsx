// src/PastAssessments.js
import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Pagination,
  Card,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GreenEyeButton from "../Green eye Icon/Greeneye";

const data = [
  { date: "11-Jan-2024", percentage: 78 },
  { date: "11-Jan-2023", percentage: 65 },
  { date: "11-Nov-2023", percentage: 50 },
  { date: "11-Oct-2023", percentage: 40 },
  { date: "11-Sep-2023", percentage: 70 },
  { date: "11-Aug-2023", percentage: 30 },
  { date: "11-Jul-2023", percentage: 78 },
  { date: "11-Jun-2023", percentage: 40 },
  { date: "11-May-2024", percentage: 30 },
  { date: "11-Jun-2023", percentage: 45 },
];

const PastAssessments = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredData = data.filter(
    (item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.toLocaleString("default", { month: "short" });
      const itemYear = itemDate.getFullYear().toString();
      console.log("itemYear>>>", itemYear);
      console.log("year>>", year);
      console.log("month>>>>", month);
      console.log(
        "temYear === year ? itemYear : ''>>",
        itemYear === year ? itemYear : ""
      );

      if (month) {
        return itemMonth === month ? itemMonth : "";
      }
      if (year) {
        return itemYear == year ? itemYear : "";
      }

    }

  );

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box p={2}>
      <Card>
        <Box p={2}>
          <Typography variant="h5">Past Assessments</Typography>
          <Grid container spacing={2} mt={2} mb={2}>
            <Grid item xs={6} md={3}>
              <Select
                fullWidth
                value={month}
                onChange={handleMonthChange}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Select Month</em>
                </MenuItem>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} md={3}>
              <Select
                fullWidth
                value={year}
                onChange={handleYearChange}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Select Year</em>
                </MenuItem>
                {[2024, 2023, 2022, 2021, 2020].map((y) => (
                  <MenuItem key={y} value={y}>
                    {y}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No.</TableCell>
                  <TableCell>Completed Date</TableCell>
                  <TableCell>Overall Percentage</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {(page - 1) * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.percentage}%</TableCell>
                    <TableCell>
                      <GreenEyeButton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={Math.ceil(filteredData.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default PastAssessments;
