import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitIcon from '@material-ui/icons/ExitToApp';
import MasterDataIcon from '@material-ui/icons/Storage';
import TruckIcon from '@material-ui/icons/LocalShipping';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SideDrawer from './SideDrawer';

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
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(5)
  },
  grid: {
    width: '65%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    color: "#3f51b5"
  }
}));

function TruckerAdd(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState({
    reqApproval: false,
  });

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const userTypeOptions = [
    { value: 'Import', label: 'Import' },
    { value: 'Export', label: 'Export' }
  ];

  const userRoleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Shipper Admin', label: 'Shipper Administrator' },
    { value: 'Shipper', label: 'Shipper' },
    { value: 'Trucker Admin', label: 'Trucker Administrator' },
    { value: 'Trucker', label: 'Trucker' }
  ];

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
          <Link color="inherit" href="/trucker/masterdata" className={classes.breadLink}>
            <MasterDataIcon className={classes.breadIcon} />
              Master Data
          </Link>
          <Link color="inherit" href="" className={classes.breadLink}>
            <TruckIcon className={classes.breadIcon} />
              Add Trucker
          </Link>
        </Breadcrumbs>
        <Paper className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <div className={classes.grid}>
              <Typography variant="h6" className={classes.title}>
                Add New Trucker
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                id="truck-head-no"
                label="Truck Head Number"
                name="truck-head-no"
                autoFocus/>
              <TextField
                margin="normal"
                fullWidth
                id="insurance-no"
                label="Insurance Number"
                name="insurance-no"/>
              <TextField
                margin="normal"
                fullWidth
                id="phone-number"
                label="Phone Number"
                name="phone-number"/>
              <TextField
                margin="normal"
                fullWidth
                id="company-name"
                label="Company Name"
                name="company-name"/>
              <TextField
                margin="normal"
                fullWidth
                id="truck-code"
                label="Truck Code"
                name="truck-code"/>
              <br/><br/>
              <Typography variant="body2">
                <strong>Require Approval:</strong>
              </Typography>
              <Grid component="label" container alignItems="center" spacing={1} className={classes.textField}>
                <Grid item>No</Grid>
                <Grid item>
                  <Switch
                    color="primary"
                    checked={state.reqApproval}
                    onChange={handleChange('reqApproval')}
                    value="reqApproval"/>
                </Grid>
                <Grid item>Yes</Grid>
              </Grid>
              <br/>
              <Select
                  options = {userTypeOptions}
                  isClearable
                  placeholder="Select User Type"
              />
              <br/>
              <Select
                  options = {userRoleOptions}
                  isClearable
                  placeholder="Select User Role"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Create
              </Button>
            </div>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}

TruckerAdd.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default TruckerAdd;
