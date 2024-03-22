import { Button, TextField, Grid, Typography } from '@mui/material';

const MakePayment = () => {
  return (
    <div className="p-4 w-full border border-solid m-10">
      <Typography variant="h4" className="mb-4">Make Insurance Payment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Policy Number" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Amount" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Card Number" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Expiry Date" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="CVV" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Pay Now</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default MakePayment;
