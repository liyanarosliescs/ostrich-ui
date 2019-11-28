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
import ExitIcon from '@material-ui/icons/ExitToApp';
import WorkOrderIcon from '@material-ui/icons/Description';
import DetailViewIcon from "@material-ui/icons/FindInPage";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import SideDrawer from './SideDrawer';
import {DropzoneArea} from 'material-ui-dropzone'
import Select from 'react-select';
import journey from '../Common/WorkOrderData/journey';
import shipment from '../Common/WorkOrderData/shipment';
import setting from  '../Common/WorkOrderData/setting';
import file from '../Common/WorkOrderData/file';
import data from './WorkOrderDetailData';
import MainForm from './EditComponent/MainForm';
import JourneyForm from './EditComponent/JourneyForm';
import ShipmentForm from './EditComponent/ShipmentForm';
import SettingForm from './EditComponent/SettingForm';
import RemarkForm from './EditComponent/RemarkForm';
import DocumentForm from './EditComponent/DocumentForm';

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
  submit: {
    marginTop: theme.spacing(5)
  }
}));

function EditDetails(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setFiles(e.target.value);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Completionist = () => <span>Closed</span>;

  const options = [
    { value: 'all', label: 'Winners Only' },
    { value: 'trucker2', label: 'trucker2' },
    { value: 'trucker1', label: 'trucker1' },
    { value: 'ylmex_trucker2', label: 'ylmex_trucker2' },
    { value: 'ylmex_trucker1', label: 'ylmex_trucker1' }
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
          <Link color="inherit" href="/shipper/workorder" className={classes.breadLink}>
            <WorkOrderIcon className={classes.breadIcon} />
              Work Order
          </Link>
          <Link color="inherit" href="" className={classes.breadLink}>
            <WorkOrderIcon className={classes.breadIcon} />
              Edit Details
          </Link>
        </Breadcrumbs>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.title}>
                Work Order
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.newSection}>
            <MainForm/>
            <JourneyForm/>
            <ShipmentForm/>
            <SettingForm/>
            <RemarkForm/>
            <DocumentForm/>
            <Grid item xs={12}>
              <br/>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <Button
                type="submit"
                variant="contained">
                Restart
              </Button>
              {'\u00A0'}{'\u00A0'}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                href="edit">
                Update
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}

EditDetails.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default EditDetails;
