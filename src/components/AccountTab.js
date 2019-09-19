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

function AccountTab(props) {
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
          id="company-name"
          label="Company Name"
          name="company-name"
          autoComplete="company-name"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          name="user-name"
          label="User Name"
          type="user-name"
          id="user-name"
          autoComplete="user-name"
        />
        <TextField
          margin="normal"
          fullWidth
          id="email-login"
          label="Email Login"
          name="email-login"
          autoComplete="email-login"
        />
        <TextField
          margin="normal"
          fullWidth
          id="email-notification"
          label="Email Notification"
          name="email-notification"
          autoComplete="email-notification"
        />
        <TextField
          margin="normal"
          fullWidth
          id="contact"
          label="Contact Number"
          name="contact"
          autoComplete="contact"
        />
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

AccountTab.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default AccountTab;
