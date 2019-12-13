import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import JourneyIconHorizontal from '@material-ui/icons/ArrowForward';
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form, FieldArray } from "formik";
import { Checkbox } from "../Common/Checkbox";
import ShipmentSelect from "../Common/ShipmentSelect";
import TransportSelect from "../Common/TransportSelect";
import uuid from 'uuid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 600,
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
  formControl: {
    margin: theme.spacing(1),
  },
  iconButton: {
    color: "#000000"
  }
}));

export default function TestForm28() {
  const classes = useStyles();

  function generateId() {
    return uuid.v4();
  }

  const initialId = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: initialId,
        shipmentsType: "",
        shipmentsOtherType: "",
        transportsType: "",
        noOfUnits: "",
        ratePerUnit: "",
        currency: "SGD",
        isFrost: false,
        isChiller: false,
        isCa: false,
        isDg: false,
        isOpen: false,
        isClose: false
      }
    ],
    containers: [
      {
        containersId: initialId,
        vehicleNo: "",
        sealNo: "",
        vgm: ""
      }
    ],
    cargoes: [
      {
        cargoesId: initialId,
        cargoName: "",
        palletQuantity: "",
        weight: "",
        unNo: ""
      }
    ]
  };

  const [value, setValue] = React.useState(0);

  const handleTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      >
      {props => {
        const {
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
          setFieldValue,
          setFieldTouched,
          isSubmitting
        } = props;
        return (
          <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <FieldArray
                  name="shipments"
                  render={({ remove, push }) => (
                    <div>
                      <Typography variant="h6" className={classes.title}>
                        Shipment
                        <IconButton
                          className= {classes.iconButton}
                          onClick={() => push({ shipmentsType: "", transportsType: "", noOfUnits: "", ratePerUnit: "", currency: "SGD", isFrost: false, isChiller: false, isCa: false, isDg: false, isOpen: false, isClose: false   })}>
                          <AddBox/>
                        </IconButton>
                      </Typography>
                      <CardContent>
                        {values.shipments.length > 0 &&
                          values.shipments.map((shipment, index) => (
                            <div key={index}>
                              <div className={classes.container}>
                                <ShipmentSelect
                                  className={classes.select}
                                  name={`shipments.${index}.shipmentsType`}
                                />
                              </div>
                              {(() => {
                                if (shipment.shipmentsType.includes('other')) {
                                  return (
                                    <div className={classes.container}>
                                    <Field
                                      name={`shipments.${index}.shipmentsOtherType`}
                                      component={TextField}
                                      label="Specify Other Shipment"
                                      className={classes.textField}
                                      fullWidth
                                    />
                                    </div>
                                  )
                                } else {
                                  return (
                                    <div></div>
                                  )
                                }
                              })()}
                              <br/>
                              <div className={classes.container}>
                                <TransportSelect
                                  className={classes.select}
                                  name={`shipments.${index}.transportsType`}
                                />
                              </div>
                              <div className={classes.container}>
                                <Field
                                  name={`shipments.${index}.noOfUnits`}
                                  component={TextField}
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
                              </div>
                              <div className={classes.container}>
                                <Field
                                  name={`shipments.${index}.ratePerUnit`}
                                  component={TextField}
                                  label="Rate Per Unit (Tax Excluded) *"
                                  id="rate"
                                  type="number"
                                  className={classes.textField}
                                  fullWidth
                                />
                              </div>
                              <div className={classes.container}>
                                <Field
                                  name={`shipments.${index}.currency`}
                                  component={TextField}
                                  disabled
                                  id="currency"
                                  label="Currency"
                                  className={classes.textField}
                                  fullWidth
                                />
                              </div>
                              <div className={classes.container}>
                                <Checkbox name={`shipments.${index}.isFrost`} />
                                <p>Frost</p>
                                <Checkbox name={`shipments.${index}.isChiller`} />
                                <p>Chiller</p>
                                <Checkbox name={`shipments.${index}.isCa`} />
                                <p>CA</p>
                                <Checkbox name={`shipments.${index}.isDg`} />
                                <p>DG</p>
                                <Checkbox name={`shipments.${index}.isOpen`} />
                                <p>Open</p>
                                <Checkbox name={`shipments.${index}.isClose`} />
                                <p>Close</p>
                              </div>
                              <div className={classes.root}>
                                <AppBar position="static" color="default">
                                  <Tabs
                                    value={value}
                                    onChange={handleTab}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                  >
                                    <Tab label="Item One" />
                                    <Tab label="Item Two"  />
                                    <Tab label="Item Three"  />
                                    <Tab label="Item Four"  />
                                    <Tab label="Item Five"  />
                                    <Tab label="Item Six"  />
                                    <Tab label="Item Seven" />
                                  </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0}>
                                  Item One
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                  Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                  Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                  Item Four
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                  Item Five
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                  Item Six
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                  Item Seven
                                </TabPanel>
                              </div>
                              <div className={classes.container}>
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
          {
            //Uncomment the statement below to see how the form submission will look like
            <pre>{JSON.stringify(values, null, 2)}</pre>
          }
          </Form>
        );
      }}
    </Formik>
  );
}
