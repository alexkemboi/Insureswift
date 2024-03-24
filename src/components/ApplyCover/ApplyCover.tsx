import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Select, MenuItem } from '@mui/material';

const ApplyCover = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    insuranceType: '',
    dateOfBirth: '',
    agreeToTerms: false
  });
  const [success, setSuccess] = useState("");
  // Handler to update form data
  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Make a POST request with formData
    fetch('http://localhost:3000/api/makeapplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          setSuccess("Application submitted successfully")
          console.log('Application submitted successfully');
        } else {
          // Handle errors
          console.error('Failed to submit application');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='m-10 border border-solid rounded p-4'>
      <form onSubmit={handleSubmit}>
        {success && (<h4 className='text-green-500'>Application successfull</h4>)}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>Insurance Application</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField name="fullName" label="Full Name" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="emailAddress" label="Email Address" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="phoneNumber" label="Phone Number" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <Select name="insuranceType" label="Select Insurance Type" fullWidth className='text-blue-500' onChange={handleChange}>
              <MenuItem value="health">Health Insurance</MenuItem>
              <MenuItem value="auto">Auto Insurance</MenuItem>
              <MenuItem value="home">Home Insurance</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField name="dateOfBirth" label="Date of Birth" type="date" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox name="agreeToTerms" />} label="Agree to Terms and Conditions" onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit Application</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ApplyCover;
