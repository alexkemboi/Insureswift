import React from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Select, MenuItem } from '@mui/material';

const ApplyCover = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>Insurance Application Form</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Full Name" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Email Address" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Phone Number" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <Select label="Select Insurance Type" fullWidth className='text-blue-500'>
          <MenuItem value="health">Health Insurance</MenuItem>
          <MenuItem value="auto">Auto Insurance</MenuItem>
          <MenuItem value="home">Home Insurance</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Date of Birth" type="date" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Checkbox />} label="Agree to Terms and Conditions" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">Submit Application</Button>
      </Grid>
    </Grid>
  );
};

export default ApplyCover;
