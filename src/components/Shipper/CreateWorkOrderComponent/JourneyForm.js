import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

export default function JourneyForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Journey Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              title="Pick Up"
            />
            <CardContent>
              <form className={classes.container}>
                <TextField
                  label="Location Line 1"
                  className={classes.textField}
                  fullWidth
                  required
                />
                <TextField
                  label="Location Line 2"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Location Line 3"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Location Line 4"
                  className={classes.textField}
                  fullWidth
                />
                <RadioGroup aria-label="position" name="position" row>
                  <FormControlLabel
                    value="empty"
                    control={<Radio color="primary" />}
                    label="Empty"
                    labelPlacement="empty"
                  />
                  <FormControlLabel
                    value="loaded"
                    control={<Radio color="primary" />}
                    label="Loaded"
                    labelPlacement="loaded"
                  />
                </RadioGroup>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              title="Delivery"
              className={classes.cardContent}
            />
            <CardContent>
              <form className={classes.container}>
                <TextField
                  label="Location Line 1"
                  className={classes.textField}
                  fullWidth
                  required
                  />
                  <TextField
                  label="Location Line 2"
                  className={classes.textField}
                  fullWidth
                  />
                  <TextField
                  label="Location Line 3"
                  className={classes.textField}
                  fullWidth
                  />
                  <TextField
                  label="Location Line 4"
                  className={classes.textField}
                  fullWidth
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
