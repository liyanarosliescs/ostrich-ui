import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class DocumentForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        dropzoneText="Drag and drop your files here or click here"
        showPreviewsInDropzone={false}
        showPreviews={true}
        showFileNames={true}
      />
    )
  }
}

export default DocumentForm;
