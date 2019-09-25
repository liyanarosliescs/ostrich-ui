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
     + '(individually and collectively “Content”), containing and/or generating data and other information under the current domain name '
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
     + 'or any Data or Content item. Use of the Service after any changes shall be deemed to constitute full acceptance of the Service as changed.</p>'
     + '<p><strong>4. Price Revision</strong><br/> The prices set forth on then current SCS fee schedule may be revised by SCS at any time, upon forty-five (45) days’ prior'
     + 'written notice to you. You may then elect to terminate this Agreement within thirty (30) days of SCS’s written notice of increase, such'
     + 'termination to be effective no earlier than the time the increased rates go into effect. You shall remain responsible for any and all'
     + 'accrued or surviving obligations of you.</p>'
     + '<p><strong>5. Payment and Taxes You shall pay for Services as follows:</strong><br/>'
     + 'a. Sea Online or its designee will invoice monthly for the Services provided during the preceding month, at the applicable rates.<br/>'
     + 'b. Terms are net fifteen (15) days from the invoice date. In the event, you fails to make any payment of any sum billed in accordance with this with this Agreement'
     + 'within fifteen (15) days after its due date, SCS or its designee may give written notice to you advising that all Services provided by SCS under this Agreement'
     + 'will be suspended unless all payments then due are made within fifteen (15) days. If you fails to pay within fifteen (15) days period, SCS may suspend all further'
     + 'Services or terminate this Agreement. Amounts payable to SCS, or its designee, as specified, are payable in full to SCS or its designee without deduction and are'
     + 'net of taxes and custom duties: in addition to such amounts, you shall pay sums equal to all taxes (including, without limitation, sales, goods and services, use,'
     + 'property, privilege, ad valorem or excise taxes) and customs duties paid or payable, however designated, levied or based on amounts payable to SCS or its designee'
     + 'under this Agreement or based on the Services, but exclusive of SCS’s franchise taxes and federal, state and local taxes based on SCS’s net income. Such amounts'
     + 'when applicable, shall appear as separate items on SCS’s or its designee’s invoice.</p>'
     + '<p><strong>6. Termination of Use and Access</strong><br/>'
     + 'You acknowledge and agree that SCS may, in its sole discretion, limit, suspect or terminate your use of'
     + 'and access to the Website for any reason. Neither SCS nor any of its Related Parties will be liable to you or any third party for'
     + 'limiting, suspending or terminating your use of and access to the Website or any Losses related to the limitation, suspension or termination'
     + 'of such use and access.</p>'
     + '<p><strong>7. Illegal Use </strong><br/>'
     + 'You acknowledge and agree that you will not engage in the operation of any illegal business; and that you will not use or export'
     + 'or permit anyone else to use or export the Service, or any part thereof, including its Content and Data (including, without limitation, any'
     + 'technical data and personal information) for any unlawful purpose or in a manner that violates any applicable internal, local, state, national'
     + 'or international law, rule, regulation, court order, administrative proceeding, or any applicable agreement. </p>'
     + '<p><strong>8. Specific Conduct Rules</strong><br/>'
     + 'Without limiting the applicability of any other obligations or limitations of your use, you agree not to <br/>'
     + 'a. post, link, or otherwise transmit any Content or Data that is unlawful, harmful or otherwise objectionable or violates any local, state, national or foreign laws; <br/>'
     + 'b. post Content or Data that do not relate to, and fall within the scope of, permitted topics and subject matter as selected and approved by SCS from time to time and notified to you as such; </br>'
     + 'c. disguise, alter or misrepresent any Content or Data or origin of such material; including by impersonating any person, entity, creating a false identity or falsely stating or otherwise misrepresenting your affiliation with a person or entity or by manipulating headers or other identifiers; <br/>'
     + 'd. post, link or otherwise transmit any Content or Data that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under non-disclosure/confidentiality agreements or undertakings) <br/>'
     + 'e. post, link or otherwise transmit any Content or Data that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party or rights of publicity or privacy; <br/>'
     + 'f. upload, post, link or otherwise transmit any Content or Data that contains viruses, Trojan horses, worms, time bombs or any other harmful or deleterious programs; <br/>'
     + 'g. interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements procedures, policies or regulations of networks connected to the Service; <br/>'
     + 'h. attempt to gain or gain unauthorized access to other computer systems through this Website or the Service; <br/>'
     + 'i. interfere with another individual’s or entity’s use and enjoyment of the Service; <br/>'
     + 'j. engage in any activity that could be constructed to constitute unsolicited or unauthorized advertising or promotional materials; <br/>'
     + 'k. post, link or otherwise transmit any Content or Data, which is defamatory in any way or of an obscene nature; or <br/>'
     + 'l. post, link or otherwise transmit any test data and/or unreasonable data volume without informing and being agreed by SCS. </p>'
     + '<p><strong>9. Provisions of Services, exclusive Remedy </strong><br/>'
     + 'a. SCS uses commercially reasonable efforts to make the Service available. In the event that the Service is not available as a result of a failure by SCS to perform its obligations under this Agreement, SCS will endeavor, giving due to regard for the cost, time and effect on other users of the Services, to correct any such failure. <br/>'
     + 'b. In the event that the service is not available or if you become dissatisfied with the service or the SCS website, on any way, and for any reason, your only recourse is to discontinue use of this service by notify SCS of termination of use. You expressly understand and agree that beyond the warranties stated in this agreement the'
     + 'service, the data and the content, whether supplied by SCS, the related parties or a third party, are provided “as is” and SCS disclaims any and all warranties of any kind, either express, implied or statutory (including, without limitation, any warranties of merchantability or fitness for a particular purpose, timeliness,'
     + 'truthfulness, sequence, completeness, accuracy, freedom from interruption, freedom against interference with your enjoyment or freedom from infringement) to the fullest extent permissible pursuant to applicable law. </p>'
     + '<p><strong>10. Notification and Assumption of Risk </strong><br/>'
     + 'a. Service may be interrupted and have errors. You acknowledge and agree that SCS does not warrant that the Service will be interrupted or error-free (including virus-free), that Data and Content will be timely Posted, updated, removed, edited or accessible or that defects will be corrected. SCS and its affiliates (or their Affiliates) assume no responsibility'
     + 'for undelivered or other communication with or through the Service or in respect of Content or Data. By using the Service you agree that you will not rely on the Service being available, uninterrupted or error-free. <br/>'
     + 'b. Data and Content is for reference only. You acknowledge that although SCS believes Content and Data not Posted by users to be generally reliable, any Content and Data posted may be inaccurate, incomplete or not useful for a particular purpose, and is for your reference only. By using the Service, you agree that you will not rely on any Posted Content'
     + 'and Data and that you will evaluate and assume all risks associated with the use of any Content and Data. </p>'
     + '<p><strong>11. Limitation of Liability </strong><br/>'
     + 'In no event will SCS and its other affiliates, shareholders, directors, managers, officers, employees, representatives and agents be liable to you or any other person for any direct, indirect, special, punitive, incidental'
     + 'or consequential claims, losses or damages of any kind (including, but not limited to, loss of profits, opportunity, business or data), fines or penalties arising from any cause whatsoever, whether based on contract or including'
     + 'negligence, or whether arising under statue by means of strict liability or arising under any other legal theory (including under criminal law), even if SCS or other relate parties have been advised of the possibility of such'
     + 'claims, losses or damages. You specifically acknowledge and agree that neither SCS nor the related parties shall be liable to you or any other person for any damages or injuries caused by (i) shutdown, delay, interruption or'
     + 'defect in the communications with and operations with the service; (ii) any error, omission, failure, delay, alteration, theft, use of destruction of information (whether residing on the service or in your equipment), regardless'
     + 'of cause (unauthorized access, virus or otherwise); or (iii) any erroneous, non-current, incomplete or misleading information or data obtained or derived from any software, products, services or other data and content used or obtained on,'
     + 'through or in connection with the service. </p>'
     + '<p><strong>12. Disputes with Users </strong><br/>'
     + 'SCS is not a party to any transactions between any of the Users of the SCS Website. Accordingly, if you have a dispute with another User, you hereby waive and'
     + 'release SCS and all Related parties in the relevant disputes (“the Indemnified Party”) from all claims, losses, damages, liabilities, judgments and fees and expenses'
     + 'related thereto (including, but without limitation, attorney’s fees), of every kind and nature, known and unknown, suspected and unsuspected, disclosed and'
     + 'undisclosed (collectively, “Losses”), arising out of or in any way connected with such disputes and you agree to defend, indemnify and hold each Indemnified Party harmless for any Losses. </p>'
     + '<p><strong>13. Governing Law </strong><br/>'
     + 'This Agreement is governed by and shall be construed in accordance with Singapore Law.';

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
