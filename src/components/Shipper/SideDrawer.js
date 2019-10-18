import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateWorkOrderIcon from '@material-ui/icons/NoteAdd';
import WorkOrderIcon from '@material-ui/icons/Description';
import LogsIcon from '@material-ui/icons/Assignment';
import ShipmentIcon from '@material-ui/icons/LocalShipping';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/Build';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import shipperIcon from '../../images/shipperIcon.png';

const useStyles = makeStyles(theme => ({
  profile: {
    marginTop: theme.spacing(2),
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
}));

function SideDrawer(props) {
  const classes = useStyles();

  return (
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
        <ListItem button key="createWorkOrderBtn">
          <ListItemIcon><CreateWorkOrderIcon /></ListItemIcon>
          <ListItemText primary="Create Work Order" />
        </ListItem>
        <ListItem button key="workOrderBtn">
          <ListItemIcon><WorkOrderIcon /></ListItemIcon>
          <ListItemText primary="Work Order" />
        </ListItem>
        <ListItem button key="workOrderLogsBtn">
          <ListItemIcon><LogsIcon /></ListItemIcon>
          <ListItemText primary="Work Order Logs" />
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
}

SideDrawer.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default SideDrawer;
