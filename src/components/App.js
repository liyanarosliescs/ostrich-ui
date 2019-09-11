import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
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
  footerText: {
    color: '#fff',
  },
  text: {
    color: '#000',
    margin: theme.spacing(2),
  },
  card: {
    justify: 'center',
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
        </Card>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Typography variant="body2" className={classes.footerText} align="center">
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
