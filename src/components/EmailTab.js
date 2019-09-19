import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '55%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function EmailTab(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = React.useState({
    checkedEmail: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <form className={classes.form} noValidate>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Off</Grid>
              <Grid item>
                <Switch
                  color="primary"
                  checked={state.checkedEmail}
                  onChange={handleChange('checkedEmail')}
                  value="checkedEmail"/>
              </Grid>
            <Grid item>On</Grid>
          </Grid>
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

  EmailTab.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };

  export default EmailTab;
