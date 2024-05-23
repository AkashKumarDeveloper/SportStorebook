import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card, CardHeader, CardContent, IconButton, TablePagination } from '@mui/material';
import { SaveAlt } from '@mui/icons-material';
import players from '../../../Assets/palyers/players.json'; // Importing the JSON file

const PlayerTable = () => {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Event handlers for pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardHeader
        title="All team players"
        action={
          <IconButton aria-label="export">
            <SaveAlt />
          </IconButton>
        }
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Player Name</TableCell>
                <TableCell>Rank</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((player, index) => (
                <TableRow key={player.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{player.player_name}</TableCell>
                  <TableCell>
                    <div style={{ backgroundColor: '#F29423', borderRadius: '20px', padding: '5px 10px', color: 'white' }}>
                      {player.Rank}
                    </div>
                  </TableCell>
                  <TableCell>{player.Gender}</TableCell>
                  <TableCell>{player.Age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

export default PlayerTable;
