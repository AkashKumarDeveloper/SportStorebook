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
  CardHeader,
  Grid,
  CardContent,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import matches from "../../../../Assets/Matches/matches.json";
import leagues from "../../../../Assets/Matches/leagueTable.json";
import results from "../../../../Assets/Matches/Results.json";

const Step4 = ({ nextStep }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <Typography variant="h5" gutterBottom>
        Match Data from Tribe/Comet/Veo/Statscore
      </Typography>
      <CardHeader title="Next Match" />
      <CardContent>
        <Box border={1} borderColor="grey.400" borderRadius={4} padding={1}>
          <TableContainer component={Paper}>
            <Table style={{ borderCollapse: "collapse" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b style={{ color: "black" }}>Sr. No.</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Date</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>League</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Opponent</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Start Time</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Location</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matches
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((match, index) => (
                    <TableRow key={match.id} style={{ border: "none" }}>
                      <TableCell style={{ border: "none" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {match.Date}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {match.League}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {match.Opponent}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {match.StartTime}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {match.Location}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 25]}
          component="div"
          count={matches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <CardHeader title="League Table" />
        <Box border={1} borderColor="grey.400" borderRadius={4} padding={1}>
          <TableContainer component={Paper}>
            <Table style={{ borderCollapse: "collapse" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b style={{ color: "black" }}>Sr. No.</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Teams</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Mp</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>W</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>D</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>L</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GF</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GA</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GD</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>PTS</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leagues
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((league, index) => (
                    <TableRow key={league.id} style={{ border: "none" }}>
                      <TableCell style={{ border: "none" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.Teams}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.Mp}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.W}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.D}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.L}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.GF}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.GA}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.GD}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {league.PTS}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 25]}
          component="div"
          count={matches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <CardHeader title="Last Six Results" />
        <Box border={1} borderColor="grey.400" borderRadius={4} padding={1}>
          <TableContainer component={Paper}>
            <Table style={{ borderCollapse: "collapse" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b style={{ color: "black" }}>Sr. No.</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Teams</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>Mp</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>W</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>D</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>L</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GF</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GA</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>GD</b>
                  </TableCell>
                  <TableCell>
                    <b style={{ color: "black" }}>PTS</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((result, index) => (
                    <TableRow key={result.id} style={{ border: "none" }}>
                      <TableCell style={{ border: "none" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.Teams}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.Mp}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.W}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.D}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.L}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.GF}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.GA}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.GD}
                      </TableCell>
                      <TableCell style={{ border: "none" }}>
                        {result.PTS}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 25]}
          component="div"
          count={matches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" onClick={nextStep}>
            Save & Continue
          </Button>
          <Button variant="contained" color="secondary">
            Assign to Coach
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Step4;
