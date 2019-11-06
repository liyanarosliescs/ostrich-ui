import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Link from '@material-ui/core/Link';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExitIcon from '@material-ui/icons/ExitToApp';
import AvailableJobsIcon from '@material-ui/icons/Assignment';
import CounterOfferIcon from "@material-ui/icons/CallSplit";
import DetailViewIcon from "@material-ui/icons/FindInPage";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import SideDrawer from './SideDrawer';
import {DropzoneArea} from 'material-ui-dropzone'
import Select from 'react-select';
import main from '../Common/WorkOrderData/main';
import journey from '../Common/WorkOrderData/journey';
import shipment from '../Common/WorkOrderData/shipment';
import setting from  '../Common/WorkOrderData/setting';
import file from '../Common/WorkOrderData/file';
import data from './OfferData';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  breadIcon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  breadLink: {
    display: 'flex',
  },
  body: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15),
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(5)
  },
  newSection: {
    marginTop: theme.spacing(5),
  },
  newSection2: {
    marginTop: theme.spacing(5),
    color: "#3f51b5"
  },
  title: {
    color: "#3f51b5"
  },
  timer: {
    color: "#ff0000"
  },
  table: {
    minWidth: 650,
  },
  textarea: {
    width: 700
  },
  select: {
    width: 300
  },
  submit: {
    marginTop: theme.spacing(5)
  }
}));

function CounterOffer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setFiles(e.target.value);
  }

  const Completionist = () => <span>Closed</span>;

  const options = [
    { value: 'all', label: 'Winners Only' },
    { value: 'trucker2', label: 'trucker2' },
    { value: 'trucker1', label: 'trucker1' },
    { value: 'ylmex_trucker2', label: 'ylmex_trucker2' },
    { value: 'ylmex_trucker1', label: 'ylmex_trucker1' }
  ];

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

  const conditions = [
    { value: 'frost', label: 'Frost' },
    { value: 'chiller', label: 'Chiller' },
    { value: 'ca', label: 'CA' },
    { value: 'dg', label: 'DG' },
    { value: 'open', label: 'Open' },
    { value: 'close', label: 'Close' }
  ];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Ostrich
          </Typography>
          <div className={classes.toolbarButtons}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <ExitIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SideDrawer/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <SideDrawer/>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/trucker/jobs" className={classes.breadLink}>
            <AvailableJobsIcon className={classes.breadIcon} />
              Available Jobs
          </Link>
          <Link color="inherit" href="" className={classes.breadLink}>
            <CounterOfferIcon className={classes.breadIcon} />
              Counter Offer
          </Link>
        </Breadcrumbs>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Work Order
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Remaining Time:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom className={classes.timer}>
                <Countdown date={Date.now() + 10000}>
                  <Completionist />
                </Countdown>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.newSection}>
            <Grid item xs={12}>
              {main.map(item => (
                <Typography variant="body2">
                  <strong>Posted by: </strong> {item.userName}, {item.companyName} <br/>
                  <strong>Reference No: </strong> {item.referenceNo} <br/>
                  <strong>Shipper: </strong> {item.shipper} <br/>
                  <strong>Consignee:  </strong> {item.consignee} <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Journey</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>PickUp#1</strong>
              </Typography>
              {journey.map(j => (
                <Typography variant="body2">
                  {j.pickUp1Location} <br/>
                  {j.pickUp1Date} {j.pickUp1Time} <br/>
                  {j.pickUp1FreeTime} hours <br/>
                  {j.pickUp1Condition} <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Delivery#1</strong>
              </Typography>
              {journey.map(j => (
                <Typography variant="body2">
                  {j.delivery1Location} <br/>
                  {j.delivery1Date} {j.delivery1Time} <br/>
                  {j.delivery1FreeTime} hours <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <strong>PickUp#2</strong>
              </Typography>
              {journey.map(j => (
                <Typography variant="body2">
                  {j.pickUp2Location} <br/>
                  {j.pickUp2Date} {j.pickUp2Time} <br/>
                  {j.pickUp2FreeTime} hours <br/>
                  {j.pickUp2Condition} <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <strong>Delivery#2</strong>
              </Typography>
              {journey.map(j => (
                <Typography variant="body2">
                  {j.delivery2Location} <br/>
                  {j.delivery2Date} {j.delivery2Time} <br/>
                  {j.delivery2FreeTime} hours <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Shipment</strong>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">
                <strong>Shipment#1</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Transport type: </strong>{s.type1} <br/>
                  <strong>Number of units: </strong>{s.noOfUnits1} Units <br/>
                  <strong>Requested Rate (Taxes Excluded): </strong>{s.ratePerUnit1} {s.currency1} <br/>
                  {s.condition1}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">
                <strong>Transport#A</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Vehicle No: </strong>{s.vehicleNo1} <br/>
                  <strong>Seal No: </strong>{s.sealNo1} <br/>
                  <strong>VGM: </strong>{s.vgm1}
                </Typography>
              ))}
              <Typography variant="body2">
                <strong>Transport#B</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Vehicle No: </strong>{s.vehicleNo2} <br/>
                  <strong>Seal No: </strong>{s.sealNo2} <br/>
                  <strong>VGM: </strong>{s.vgm2}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">
                <strong>Cargo#Aa</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Cargo Name: </strong>{s.cargoName1} <br/>
                  <strong>Pallet Quantity: </strong>{s.palletQuantity1} Cargo <br/>
                  <strong>Weight: </strong>{s.weight1} <br/>
                  <strong>UN No: </strong>{s.un1}
                </Typography>
              ))}
              <Typography variant="body2">
                <strong>Cargo#Ab</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Cargo Name: </strong>{s.cargoName2} <br/>
                  <strong>Pallet Quantity: </strong>{s.palletQuantity2} Cargo <br/>
                  <strong>Weight: </strong>{s.weight2} <br/>
                  <strong>UN No: </strong>{s.un2}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">
                <strong>Shipment#2</strong>
              </Typography>
              {shipment.map(s => (
                <Typography variant="body2">
                  <strong>Transport type:</strong>{s.type2} <br/>
                  <strong>Number of units:</strong>{s.noOfUnits2} <br/>
                  <strong>Requested Rate (Taxes Excluded):</strong>{s.ratePerUnit2} {s.currency2} <br/>
                  {s.condition2}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Settings</strong>
              </Typography>
              {setting.map(item => (
                <Typography variant="body2">
                  <strong>Auto Reject: </strong> {item.autoReject} <br/>
                  <strong>Counter Offer: </strong> {item.counterOffer} <br/>
                  <strong>Auto Assignment:  </strong> {item.autoAssign} <br/>
                  <strong>Open For:  </strong> {item.openFor} <br/>
                  <strong>Open Time:  </strong> {item.openTime} Minutes <br/>
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Remarks</strong>
              </Typography>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Remark</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Date Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {setting.map(item => (
                    <TableRow>
                      <TableCell>{item.remark}</TableCell>
                      <TableCell>System-S1</TableCell>
                      <TableCell>	Shipper1</TableCell>
                      <TableCell>30 Oct 2019 10:18AM</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12}>
              <div id= "action">
                <Typography variant="h6" gutterBottom className={classes.newSection2}>
                  Documents
                </Typography>
              </div>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Open For</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {file.map(item => (
                    <TableRow>
                      <TableCell>{item.file}</TableCell>
                      <TableCell>trucker1, trucker2</TableCell>
                      <TableCell><DetailViewIcon/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom className={classes.newSection2}>
                My Counter Offer
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Shipment#1</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Transport Type:</strong><br/><br/><br/>
                <strong>Condition Type:</strong><br/><br/><br/>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.select}
                options = {transports}
                isClearable
                defaultValue={{ label: "20GP", value: "20GP" }}
              /><br/>
              <Select
                className={classes.select}
                options = {conditions}
                isClearable
                isMulti
                defaultValue={[conditions[0], conditions[1]]}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Shipment#2</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Transport Type:</strong><br/><br/><br/>
                <strong>Condition Type:</strong><br/><br/><br/>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.select}
                options = {transports}
                isClearable
                defaultValue={{ label: "40GP", value: "40GP" }}
              /><br/>
              <Select
                className={classes.select}
                options = {conditions}
                isClearable
                isMulti
                defaultValue={[conditions[2], conditions[4]]}
              /><br/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Total Shipments</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Number of units:</strong><br/><br/><br/>
                <strong>Rate per unit (Tax Excluded):</strong><br/><br/><br/>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField id="noOfUnits"/><br/><br/>
              <TextField
                id="ratePerUnit"
                InputProps={{
                  endAdornment: <InputAdornment position="end">SGD</InputAdornment>,
                }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <Button
                type="submit"
                variant="contained"
                href="offer#action">
                Go to Offer
              </Button>
              {'\u00A0'}{'\u00A0'}
              <Button
                type="submit"
                variant="contained"
                color="secondary">
                Cancel
              </Button>
              {'\u00A0'}{'\u00A0'}
              <Button
                type="submit"
                variant="contained"
                color="primary">
                Submit Counter Offer
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}

CounterOffer.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default CounterOffer;
