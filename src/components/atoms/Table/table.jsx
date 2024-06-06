import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card, CardHeader, CardContent, IconButton, TablePagination, Box } from '@mui/material';
import { SaveAlt } from '@mui/icons-material';
import players from '../../../Assets/palyers/players.json'; // Importing the JSON file

const  PlayerTable = () => {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
        <Box border={1} borderColor="grey.400" borderRadius={4} padding={1}>
          <TableContainer component={Paper}>
            <Table style={{borderCollapse: 'collapse'}}>
              <TableHead>
                <TableRow>
                  <TableCell><b style={{ color: 'black' }}>Sr. No.</b></TableCell>
                  <TableCell><b style={{ color: 'black' }}>Player Name</b></TableCell>
                  <TableCell><b style={{ color: 'black' }}>Rank</b></TableCell>
                  <TableCell><b style={{ color: 'black' }}>Gender</b></TableCell>
                  <TableCell><b style={{ color: 'black' }}>Age</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((player, index) => (
                  <TableRow key={player.id} style={{border: 'none'}}>
                    <TableCell style={{border: 'none'}}>{index + 1}</TableCell>
                    <TableCell style={{border: 'none'}}>{player.player_name}</TableCell>
                    <TableCell style={{border: 'none', textAlign: 'center'}}>
                    <div style={{ backgroundColor: '#F29423', borderRadius: '20px', padding: '2px 10px', color: 'white', display: 'inline-block', width: '25px', textAlign: 'center' }}>
                        {player.Rank}
                      </div>
                    </TableCell>
                    <TableCell style={{border: 'none'}}>{player.Gender}</TableCell>
                    <TableCell style={{border: 'none'}}>{player.Age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 25]}
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
