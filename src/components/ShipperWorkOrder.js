import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import shipperIcon from '../images/shipperIcon.png';
import Link from '@material-ui/core/Link';
import ExitIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkOrderIcon from '@material-ui/icons/Description';
import OrderFulfillmentIcon from '@material-ui/icons/Assignment';
import ShipmentIcon from '@material-ui/icons/LocalShipping';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/Build';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';

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
  profile: {
    marginTop: theme.spacing(2),
  },
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
  avatar: {
    margin: 10,
    width: 70,
    height: 70,
  },
  name: {
    paddingTop: theme.spacing(1),
  },
  link: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
  breadIcon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  breadLink: {
    display: 'flex',
  },
  textfield: {
    width: 350,
    height: 60,
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

function ShipperWorkOrder(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.profile} />
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Shipper" src={shipperIcon} className={classes.avatar} />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h5" className={classes.name}>
          Company Name
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="body1" className={classes.name}>
          User Name
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Link href="#" variant="body2" className={classes.link}>
          Edit Profile
        </Link>
      </Grid>
      <Divider />
      <List>
        <ListItem button key="dashboardBtn">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button key="workOrderBtn">
          <ListItemIcon><WorkOrderIcon /></ListItemIcon>
          <ListItemText primary="Work Order" />
        </ListItem>
        <ListItem button key="orderFulfillmentBtn">
          <ListItemIcon><OrderFulfillmentIcon /></ListItemIcon>
          <ListItemText primary="Order Fulfillment" />
        </ListItem>
        <ListItem button key="shipmentTypeBtn">
          <ListItemIcon><ShipmentIcon /></ListItemIcon>
          <ListItemText primary="Shipment Type" />
        </ListItem>
        <ListItem button key="contactsDirectoryBtn">
          <ListItemIcon><ContactsIcon /></ListItemIcon>
          <ListItemText primary="Contacts Directory" />
        </ListItem>
        <ListItem button key="settingsBtn">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

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
            {drawer}
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.paper}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick} className={classes.breadLink}>
              <WorkOrderIcon className={classes.breadIcon} />
                Work Order
            </Link>
          </Breadcrumbs>
          <TextField
            id="outlined-search"
            label="Search Ref/Work Order/Container/Truck No"
            type="search"
            margin="normal"
            variant="outlined"
            className={classes.textfield}
          />
          <Typography variant="h5" component="h3" className={classes.name}>
            Work Order
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </main>
    </div>
  );
}

ShipperWorkOrder.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ShipperWorkOrder;
