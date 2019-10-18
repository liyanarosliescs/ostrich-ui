import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Main Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="referenceNo"
            name="referenceNo"
            label="Reference No"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="shipper"
            name="shipper"
            label="Shipper"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="consignee"
            name="consignee"
            label="Consignee"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
