import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LockIcon from '@material-ui/icons/LockOpen';
import MoneyIcon from '@material-ui/icons/MonetizationOn';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import AccountTab from './AccountTab';
import PasswordTab from './PasswordTab';
import EmailTab from './EmailTab';
import CurrencyTab from './CurrencyTab';

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

function SettingsTabs(props) {
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
          <Tab label="Account" icon={<PersonPinIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab label="Password" icon={<LockIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab label="Currency" icon={<MoneyIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab label="Email Notification" icon={<EmailIcon />} aria-label="help" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <Paper className={classes.paper}>
        <TabPanel value={value} index={0}>
          <AccountTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PasswordTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CurrencyTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EmailTab />
        </TabPanel>
      </Paper>
    </div>
  );
}

SettingsTabs.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default SettingsTabs;
