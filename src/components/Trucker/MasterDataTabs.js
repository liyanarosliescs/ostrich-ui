import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrailerIcon from '@material-ui/icons/DirectionsBus';
import DriverIcon from '@material-ui/icons/Group';
import TruckIcon from '@material-ui/icons/LocalShipping';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import TruckersTab from './TruckersTab';
import TrailersTab from './TrailersTab';
import CurrencyTab from '../CurrencyTab';

const useStyles = makeStyles(theme => ({
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
  paper: {
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
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

function MasterDataTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Paper className={classes.tab} >
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
          <Tab label="Truckers" icon={<TruckIcon />} aria-label="truck" {...a11yProps(0)} />
          <Tab label="Trailers" icon={<TrailerIcon />} aria-label="trailer" {...a11yProps(1)} />
          <Tab label="Drivers" icon={<DriverIcon />} aria-label="driver" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <Paper className={classes.paper}>
        <TabPanel value={value} index={0}>
          <TruckersTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TrailersTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CurrencyTab />
        </TabPanel>
      </Paper>
    </div>
  );
}

MasterDataTabs.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default MasterDataTabs;
