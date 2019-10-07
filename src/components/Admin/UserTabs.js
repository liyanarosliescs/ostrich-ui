import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ShipperIcon from "@material-ui/icons/DirectionsBoat";
import TruckerIcon from "@material-ui/icons/LocalShipping";
import { makeStyles } from "@material-ui/core/styles";
import ShipperTab from './ShipperTab';

const useStyles = makeStyles(theme => ({
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  tabPanel: {
    backgroundColor: "#3f51b5",
    color: "#ffffff"
  },
  paper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`
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
  value: PropTypes.any.isRequired
};

function UserTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
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
          centered
        >
          <Tab
            label="Shipper"
            icon={<ShipperIcon />}
            aria-label="shipper"
            {...a11yProps(0)}
          />
          <Tab
            label="Trucker"
            icon={<TruckerIcon />}
            aria-label="trucker"
            {...a11yProps(1)}
          />
        </Tabs>
      </Paper>
      <Paper className={classes.paper}>
        <TabPanel value={value} index={0}>
          <ShipperTab/>
        </TabPanel>
        <TabPanel value={value} index={1}>

        </TabPanel>
      </Paper>
    </div>
  );
}

UserTabs.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default UserTabs;
