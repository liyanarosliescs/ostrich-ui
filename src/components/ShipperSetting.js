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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/LockOpen';
import MoneyIcon from '@material-ui/icons/MonetizationOn';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import EmailIcon from '@material-ui/icons/Email';
import Switch from '@material-ui/core/Switch';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
  },
  tabPanel: {
    backgroundColor: '#3f51b5',
    color: '#ffffff',
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
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
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
  form: {
    width: '55%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

function ShipperSetting(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
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
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} className={classes.breadLink}>
            <SettingsIcon className={classes.breadIcon} />
              Settings
          </Link>
        </Breadcrumbs>
        <Paper className={classes.tab}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabPanel}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FFFFFF"
              }
            }}
            centered>

            <Tab label="Account" icon={<PersonPinIcon />} aria-label="phone" {...a11yProps(0)} />
            <Tab label="Password" icon={<LockIcon />} aria-label="favorite" {...a11yProps(1)} />
            <Tab label="Currency" icon={<MoneyIcon />} aria-label="person" {...a11yProps(2)} />
            <Tab label="Email Notification" icon={<EmailIcon />} aria-label="help" {...a11yProps(3)} />

          </Tabs>
        </Paper>
        <Paper className={classes.paper}>
          <TabPanel value={value} index={0}>
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
          </TabPanel>
          <TabPanel value={value} index={1}>
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
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <form className={classes.form} noValidate>
                <Switch
                  value="checkedB"
                  color="primary"/>
              </form>
            </Grid>
          </TabPanel>

        </Paper>
      </main>
    </div>
  );
}

ShipperSetting.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ShipperSetting;
