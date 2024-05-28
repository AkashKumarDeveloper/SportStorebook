// src/AssessmentTable.js
import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Button,
  Typography,
  Card,
} from '@mui/material';

const data = [
  { name: 'Sociability', progress: 60 },
  { name: 'Agreeableness', progress: 100 },
  { name: 'Mindfulness', progress: 60 },
  { name: 'Receptivity to new things', progress: 0 },
  { name: 'Temperamental', progress: 0 },
];

const AssessmentTable = () => {
  return (
    <Box p={2}>
      <Card>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Monthly Assessments</Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Assessment Name</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        style={{ width: '100%', marginRight: '8px' }}
                      />
                      <Typography>{item.progress}%</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Complete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default AssessmentTable;
