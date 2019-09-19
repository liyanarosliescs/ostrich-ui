import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textfield: {
    width: 350,
    height: 60,
  },
  form: {
    width: '55%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function PasswordTab(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="current-password"
            label="Current Password"
            name="current-password"
            autoComplete="current-password"
            type="password"
            autoFocus/>
          <TextField
            margin="normal"
            fullWidth
            id="new-password"
            label="New Password"
            name="new-password"
            autoComplete="new-password"
            type="password"/>
          <TextField
            margin="normal"
            fullWidth
            id="confirm-new-password"
            label="Confirm New Password"
            name="confirm-new-password"
            autoComplete="confirm-new-password"
            type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Update
          </Button>
        </form>
      </Grid>
    );
  }

  PasswordTab.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };

  export default PasswordTab;
