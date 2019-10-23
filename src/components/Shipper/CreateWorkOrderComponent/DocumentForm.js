import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import {DropzoneArea} from 'material-ui-dropzone'

export default function DocumentForm() {

  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setFiles(e.target.value);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload your supporting documents
      </Typography>
      <DropzoneArea
        onChange={setFiles}
        dropzoneText="Drag and drop your files here or click here"
        showPreviewsInDropzone={false}
        showPreviews={true}
        showFileNames={true}
      />
    </React.Fragment>
  );

}
