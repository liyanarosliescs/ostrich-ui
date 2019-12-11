import React, { useState } from "react";
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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitIcon from '@material-ui/icons/ExitToApp';
import ShipmentIcon from '@material-ui/icons/LocalShipping';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {DropzoneArea} from 'material-ui-dropzone'
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
  },
  textarea: {
    width: 640
  },
}));

function ShipmentTypeEdit(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState({
    reqApproval: false,
  });
  const [files, setFiles] = useState([]);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

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
          <Link color="inherit" href="/shipper/shipmenttype" className={classes.breadLink}>
            <ShipmentIcon className={classes.breadIcon} />
              Shipment Type
          </Link>
          <Link color="inherit" href="" className={classes.breadLink}>
            <ShipmentIcon className={classes.breadIcon} />
              Edit Shipment
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
                Edit Shipment
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                defaultValue="20RF"
                id="code"
                label="Code"
                name="code"
                autoFocus/>
              <br/><br/>
              <Typography variant="body1" className={classes.title}>
                <strong>Description</strong>
              </Typography>
              <br/>
              <TextareaAutosize rows={7}
                defaultValue="20 FOOTER REEFER CONTAINER"
                className={classes.textarea}/>
              <TextField
                margin="normal"
                fullWidth
                defaultValue="SEA"
                id="mode"
                label="Mode"
                name="mode"/>
              <TextField
                margin="normal"
                fullWidth
                defaultValue="REEFER CONTAINER"
                id="fclType"
                label="FCL Type"
                name="fclType"/>
              <TextField
                margin="normal"
                fullWidth
                defaultValue="1.0"
                id="teu"
                label="TEU"
                name="teu"/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Update
              </Button>
            </div>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}

ShipmentTypeEdit.propTypes = {
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ShipmentTypeEdit;
