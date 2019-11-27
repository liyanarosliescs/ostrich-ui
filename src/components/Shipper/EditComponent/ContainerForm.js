import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  icon: {
    width: 40,
    height: 40,
  },
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  select: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  }
}));

export default function ContainerForm() {
  const classes = useStyles();

  return(
    <Typography variant="h6" className={classes.title}>
      Container
    </Typography>
  );
}
