import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class TextEditor extends Component {

  constructor(props) {
    super(props);
    const html = '<p><strong>1. The Service</strong><br/>This website is brought to you by Symphony Creative Solutions Pte.Ltd., Singapore (“SCS”) at the SCS fee rates.'
     + 'The text, sound, pictures, programs, video, graphics or any products or materials (including any e-mail notifications sent by SCS or documents generated thereby)'
     + '(individually and collectively “Content”), containing and/or generating data and other information under the current domain name'
     + '<a href="https://www.scs71.com">www.scs71.com</a> may be included in, accessible through or posted upon the Website from time to time. You agree that there are no'
     + 'standards of performance for the Service except those that are expressly set forth in this Agreement.</p>'
     + '<p><strong>2. Use of Service</strong><br/>As a condition for the use of the Service, you undertake, represent and warrant that you have the legal and other requisite'
     + 'authority to enter into this Agreement and/or any entity you represent and on behalf of which you are entering into this Agreement. You will only use the Service'
     + 'in compliance with this Agreement.<br/>a. SCS hereby grants to you, during the term of this Agreement and for your own internal business purpose only (which shall'
     + 'not include any business whose purpose is competitive with the commercial purpose or purposes or principles of SCS Website and/ or the Service).<br/>'
     + 'b. SCS reserves all rights not expressly granted by it under this Agreement. You may not sell, lease, furnish or otherwise permit or provide access to the'
     + 'Service or its Data or Content to any third parties, unless permitted to do so by SCS.<br/>'
     + 'c. You agree to defend, indemnify and hold each Indemnified Party harmless from all Losses due to or arising out of your use of the Service, your connection'
     + 'to the Service, your violation of the Agreement, or your violation of any rights of another. This indemnity may, without in any way limiting the Indemnified Party,'
     + 'be claimed as a debt or a liquidated demand.<br/>'
     + 'd. You acknowledge and agree that SCS has proprietary rights in the Service and posting of any Content or Data, including but not limited to any and all formats,'
     + 'computer programs, specifications, user guides and displaying any trademarks or service marks on this Service.<br/>'
     + 'e. In order to use the Service, you must obtain access to the World Wide Web, either directly or through devices that access web-based Content and Data, and pay'
     + 'any services fees associated with such access. In addition, you must provide all equipment necessary to make such connection to the World Wide Web, including a'
     + 'computer and modem or other access device. SCS is not responsible for any on-Line or other charges you may incur in connection with participating in this Website.<br/>'
     + 'f. SCS may use “cookies” as a fundamental part of our interaction with your Internet browser. The intention is to provide you with a better and more customized'
     + 'service and with a more effective website. If you wish to make full use of the SCS Website, it is required that you accept cookies. If your browser is'
     + 'configured to reject all cookies you may be unable to use certain services on the SCS Website that require cookies in order to participate.</p>'
     + '<p><strong>3. Changes to the Service</strong><br/>'
     + 'You acknowledge and agree that nothing in this Agreement constitutes an undertaking by SCS to continue providing the Service, or'
     + 'any aspect of Service, in its present form. SCS may for any reason whatsoever and without specific notice to you, make'
     + 'additions to, change, modify, discontinue, delete or suspend any aspect of the Service, including access to the Service'
     + 'or any Data or Content item. Use of the Service after any changes shall be deemed to constitute full acceptance of the Service as changed.</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="rdw-storybook-toolbar"
        wrapperClassName="rdw-storybook-wrapper"
        editorClassName="rdw-storybook-editor"
        onEditorStateChange={this.onEditorStateChange}/>
    );
  }
}

export default TextEditor;
