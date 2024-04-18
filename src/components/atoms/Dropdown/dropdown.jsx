import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
 
const DropDown = () => {
    return (
        <FormControl sx={{ marginTop: 50 }}>
            <InputLabel>Select</InputLabel>
            <Select
                sx={{
                    width: 250,
                    height: 50,
                }}
            >
                <MenuItem value={1}>Red</MenuItem>
                <MenuItem value={2}>Black</MenuItem>
                <MenuItem value={3}>Blue</MenuItem>
                <MenuItem value={4}>Green</MenuItem>
                <MenuItem value={5}>Yellow</MenuItem>
            </Select>
        </FormControl>
    );
}

export default DropDown;