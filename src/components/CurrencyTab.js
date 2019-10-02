import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import currencies from './Currencies';

const useStyles = makeStyles(theme => ({
  textfield: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 300,
  },
  form: {
    width: '65%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CurrencyTab(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [values, setValues] = React.useState({
    currency: 'SGD',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
      <form className={classes.form} noValidate>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={values.currency}
          onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal">
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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

CurrencyTab.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default CurrencyTab;
