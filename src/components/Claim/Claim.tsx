// components/ClaimSubmissionForm.js

import { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const MakeClaim = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({

    policyId: '',
    userId: '',
    claimDate: '',
    claimStatus: '',
    approved: '',
    description: '',
    payout: '',
    currency: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/Makeclaim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess(true);
        console.log('Claim submitted successfully');
      } else {
        console.error('Failed to submit claim');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex-col my-20 overflow-y-scroll h-96 border border-solid mx-20 p-4'>
      <h4 className='text-2xl font-bold'>Make Claim</h4>
      {success && <h4 className='text-center text-green-800'>Claim submitted successfully</h4>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="userId" label="User ID" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="policyId" label="Policy ID" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="claimDate" label="Claim Date" type="date" fullWidth onChange={handleChange} />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField name="claimStatus" label="Claim Status" fullWidth onChange={handleChange} />
        </Grid> */}
        {/* <Grid item xs={12}>
          <TextField name="approved" label="Approved" fullWidth onChange={handleChange} />
        </Grid> */}
        <Grid item xs={12}>
          <TextField name="description" label="Description" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="payout" label="Payout" fullWidth onChange={handleChange} />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField name="currency" label="Currency" fullWidth onChange={handleChange} />
        </Grid> */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit Claim</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MakeClaim;
