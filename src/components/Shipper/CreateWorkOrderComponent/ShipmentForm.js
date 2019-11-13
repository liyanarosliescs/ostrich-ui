import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Select from 'react-select';
import Checkbox from '@material-ui/core/Checkbox';
import JourneyIconHorizontal from '@material-ui/icons/ArrowForward';
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form, FieldArray } from "formik";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  subtitle: {
    textAlign: 'center'
  },
  title: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  icon: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(20),
    },
    width: 70,
    height: 70,
  },
  select: {
    width: 300
  },
  iconButton: {
    color: "#000000"
  }
}));

export default function ShipmentForm() {
  const classes = useStyles();

  const transports = [
    { value: '20GP', label: '20GP' },
    { value: '40GP', label: '40GP' },
    { value: '45GP', label: '45GP' },
    { value: '1T', label: '1T' },
    { value: '3.5T', label: '3.5T' },
    { value: '20RF', label: '20RF' },
    { value: '40RF', label: '40RF' },
    { value: '40HC', label: '40HC' },
    { value: '53FT', label: '53FT' },
    { value: 'Flatbed', label: 'Flatbed' },
    { value: 'Rabon', label: 'Rabon' },
    { value: 'Thorton', label: 'Thorton' }
  ];

  const shipments = [
    { value: 'single', label: 'Single' },
    { value: 'roundLive', label: 'Round(Live)' },
    { value: 'roundDropAndHook', label: 'Round(Drop and Hook)' },
    { value: 'other', label: 'Other' }
  ];

  const [state, setState] = React.useState({
    isFrost: false,
    isChiller: false,
    isCa: false,
    isDg: false,
    isOpen: false,
    isClose: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const initialValues = {
    containers: [
      {
        vehicleNo: "",
        sealNo: "",
        vgm: ""
      }
    ],
    cargoes: [
      {
        cargoName: "",
        palletQuantity: "",
        weight: "",
        unNo: ""
      }
    ]
  };

  return (
    <React.Fragment>
    <Formik
      initialValues={initialValues}
      render={({ values }) => {
        return (
          <Form>
      <Typography variant="h6" gutterBottom>
        Shipment Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.subtitle}>
            Shipment <AddBox/> <DeleteBox/>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <form className={classes.container}>
                <Select
                  className={classes.select}
                  options = {shipments}
                  isClearable
                  placeholder="Select Shipment Type"
                />
                <br/>
                <Select
                  className={classes.select}
                  options = {transports}
                  isClearable
                  placeholder="Select Transport Type"
                />
                <TextField
                  label="Number of *"
                  id="units"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Units</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
                <TextField
                  label="Rate Per Unit (Tax Excluded) *"
                  id="rate"
                  type="number"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  disabled
                  id="currency"
                  label="Currency"
                  defaultValue="SGD"
                  className={classes.textField}
                  fullWidth
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isFrost}
                      onChange={handleChange('isFrost')}
                      value="isFrost"
                      color="primary"
                    />
                  }
                  label="Frost"
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isChiller}
                      onChange={handleChange('isChiller')}
                      value="isChiller"
                      color="primary"
                    />
                  }
                  label="Chiller"
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isCa}
                      onChange={handleChange('isCa')}
                      value="isCa"
                      color="primary"
                    />
                  }
                  label="CA"
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isDg}
                      onChange={handleChange('isDg')}
                      value="isDg"
                      color="primary"
                    />
                  }
                  label="DG"
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isOpen}
                      onChange={handleChange('isOpen')}
                      value="isOpen"
                      color="primary"
                    />
                  }
                  label="Open"
                />
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={state.isClose}
                      onChange={handleChange('isClose')}
                      value="isClose"
                      color="primary"
                    />
                  }
                  label="Close"
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={1}>
          <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <JourneyIconHorizontal
              className={classes.icon}
            />
          </Box>
          <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
            <JourneyIconVertical
              className={classes.icon}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <FieldArray
              name="containers"
              render={({ remove, push }) => (
                <div>
                <Typography variant="h6" className={classes.title}>
                  Container
                  <IconButton
                    className= {classes.iconButton}
                    onClick={() => push({ vehicleNo: "", sealNo: "", vgm: "" })}>
                    <AddBox/>
                  </IconButton>
                </Typography>
                <CardContent>
                  {values.containers.length > 0 &&
                    values.containers.map((container, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <TextField
                            name={`containers.${index}.vehicleNo`}
                            label="Vehicle Number"
                            className={classes.textField}
                            fullWidth/>
                        </div>
                        <div className="col">
                          <TextField
                            name={`containers.${index}.sealNo`}
                            label="Seal No"
                            className={classes.textField}
                            fullWidth/>
                        </div>
                        <div className="col">
                          <TextField
                            name={`containers.${index}.vgm`}
                            label="VGM"
                            className={classes.textField}
                            fullWidth/>
                        </div>
                        <div className="col">
                          <IconButton
                            className= {classes.iconButton}
                            onClick={() => remove(index)}
                          >
                            <DeleteBox/>
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </div>
              )}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={1}>
          <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <JourneyIconHorizontal
              className={classes.icon}
            />
          </Box>
          <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
            <JourneyIconVertical
              className={classes.icon}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
          <FieldArray
            name="cargoes"
            render={({ remove, push }) => (
              <div>
              <Typography variant="h6" className={classes.title}>
                Cargo
                <IconButton
                  className= {classes.iconButton}
                  onClick={() => push({ cargoName: "", palletQuantity: "", weight: "", unNo: "" })}>
                  <AddBox/>
                </IconButton>
              </Typography>
              <CardContent>
                {values.cargoes.length > 0 &&
                  values.cargoes.map((cargo, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <TextField
                          name={`cargoes.${index}.cargoName`}
                          label="Cargo Name"
                          className={classes.textField}
                          fullWidth/>
                      </div>
                      <div className="col">
                        <TextField
                          name={`cargoes.${index}.palletQuantity`}
                          label="Pallet Quantity"
                          className={classes.textField}
                          fullWidth/>
                      </div>
                      <div className="col">
                        <TextField
                          name={`cargoes.${index}.weight`}
                          label="Weight"
                          id="weight"
                          type="number"
                          className={classes.textField}
                          fullWidth
                          InputProps={{
                            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            inputProps: { min: 1 }
                          }}
                        />
                      </div>
                      <div className="col">
                        <TextField
                          name={`cargoes.${index}.unNo`}
                          label="UN No"
                          className={classes.textField}
                          fullWidth
                        />
                      </div>
                      <div className="col">
                        <IconButton
                          className= {classes.iconButton}
                          onClick={() => remove(index)}
                        >
                          <DeleteBox/>
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>
            )}
          />
          </Card>
        </Grid>
      </Grid>
      </Form>
    );
  }}
/>
    </React.Fragment>
  );
}
