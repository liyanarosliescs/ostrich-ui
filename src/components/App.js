import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import sideImg from '../images/sideImg.jpg';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(' + sideImg + ')',
    alt: 'Sign In',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  text: {
    color: '#fff',
    margin: theme.spacing(2),
  },
  card: {
    backgroundColor: fade( '#000', 0.5),
    padding: theme.spacing(2),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Card className={classes.card}>
        <Typography variant="h2" component="h1" className={classes.text} align="center" gutterBottom>
          Ostrich
        </Typography>
        <Typography variant="h5" component="h2" className={classes.text} align="center" gutterBottom>
          {'The Shipper and Trucker Matching Platform'}
        </Typography>
          <Grid container spacing={1} justify="center">
            <Grid item>
              <Button variant="contained" size="large" color="primary" align="center">
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large" color="inherit" align="center">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Typography variant="body2" className={classes.text} align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Ostrich
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        </Container>
      </footer>
    </div>
  );
}
