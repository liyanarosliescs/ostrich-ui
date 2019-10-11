import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Link from '@material-ui/core/Link';
import ExitIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import SideDrawer from './SideDrawer';
import OpenBidding from '../Common/OpenBidding';
import TodayWorkOrder from '../Common/TodayWorkOrder';
import MonthWorkOrder from '../Common/MonthWorkOrder';
import MonthWorkOrderChart from '../Common/MonthWorkOrderChart';
import AssignedTruckers from '../Common/AssignedTruckers';

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
  indicator: {
    padding: theme.spacing(4)
  }
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

function Dashboard(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
          <Link color="inherit" href="/" onClick={handleClick} className={classes.breadLink}>
            <DashboardIcon className={classes.breadIcon} />
              Dashboard
          </Link>
        </Breadcrumbs>
        <div className={classes.indicator}>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              lg={4}
              sm={12}
              xl={4}
              xs={12}>
              <OpenBidding />
            </Grid>
            <Grid
              item
              lg={4}
              sm={12}
              xl={4}
              xs={12}>
              <TodayWorkOrder />
            </Grid>
            <Grid
              item
              lg={4}
              sm={12}
              xl={4}
              xs={12}>
              <MonthWorkOrder />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}>
              <MonthWorkOrderChart />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}>
              <AssignedTruckers />
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Dashboard;
