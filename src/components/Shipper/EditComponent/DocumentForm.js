import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DetailViewIcon from "@material-ui/icons/FindInPage";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import {DropzoneArea} from 'material-ui-dropzone'
import Select from 'react-select';
import file from '../../Common/WorkOrderData/file';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  table: {
    minWidth: 650,
  }
}));

export default function DocumentForm() {
  const classes = useStyles();

  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setFiles(e.target.value);
  }

  const options = [
    { value: 'all', label: 'Winners Only' },
    { value: 'trucker2', label: 'trucker2' },
    { value: 'trucker1', label: 'trucker1' },
    { value: 'ylmex_trucker2', label: 'ylmex_trucker2' },
    { value: 'ylmex_trucker1', label: 'ylmex_trucker1' }
  ];

  return (
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        Documents
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Open For</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {file.map(item => (
            <TableRow>
              <TableCell>{item.file}</TableCell>
              <TableCell>trucker1, trucker2</TableCell>
              <TableCell><DetailViewIcon/><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br/><br/>
      <Typography variant="body1" gutterBottom>
        <strong>Upload additional documents</strong>
      </Typography>
      <DropzoneArea
        onChange={setFiles}
        dropzoneText="Drag and drop your files here or click here"
        showPreviewsInDropzone={false}
        showPreviews={true}
        showFileNames={true}
      />
      <br/>
      <Select
        className={classes.select}
        options = {options}
        isClearable
        isMulti
        placeholder="Files open for"
      />
    </Grid>
  );
}
