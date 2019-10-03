import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContainerIcon from "@material-ui/icons/ViewStream";
import TruckIcon from "@material-ui/icons/LocalShipping";
import { makeStyles } from "@material-ui/core/styles";
import ContainerTab from "./ContainerTab";
import TruckTab from "./TruckTab";

const useStyles = makeStyles(theme => ({
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15)
  },
  tabPanel: {
    backgroundColor: "#3f51b5",
    color: "#ffffff"
  },
  paper: {
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15)
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

function ShipmentTabs(props) {
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
            label="Container"
            icon={<ContainerIcon />}
            aria-label="container"
            {...a11yProps(0)}
          />
          <Tab
            label="Truck"
            icon={<TruckIcon />}
            aria-label="truck"
            {...a11yProps(1)}
          />
        </Tabs>
      </Paper>
      <Paper className={classes.paper}>
        <TabPanel value={value} index={0}>
          <ContainerTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TruckTab />
        </TabPanel>
      </Paper>
    </div>
  );
}

ShipmentTabs.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ShipmentTabs;
