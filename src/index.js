import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import ShipperWorkOrder from './components/ShipperWorkOrder'
import WorkOrder from './components/Shipper/WorkOrder'
import TruckerWorkOrder from './components/Trucker/WorkOrder'
import EditDetails from './components/Shipper/EditDetails'
import WorkOrderDetails from './components/Shipper/WorkOrderDetails'
import TruckerWorkOrderDetails from './components/Trucker/WorkOrderDetails'
import TruckerOffer from './components/Trucker/Offer'
import TruckerCounterOffer from './components/Trucker/CounterOffer'
import ShipperSetting from './components/Shipper/ShipperSetting'
import ContactsDirectory from './components/Shipper/ContactsDirectory'
import ShipmentType from './components/Shipper/ShipmentType'
import TruckerSetting from './components/Trucker/TruckerSetting'
import AdminSetting from './components/Admin/AdminSetting'
import AdminTerm from './components/Admin/TermsOfUse'
import MasterData from './components/Trucker/MasterData'
import UserManagement from './components/Admin/UserManagement'
import AdminUserEdit from './components/Admin/UserEdit'
import AdminDashboard from './components/Admin/Dashboard'
import ShipperDashboard from './components/Shipper/Dashboard'
import CurrencyManagement from './components/Admin/CurrencyManagement'
import WorkOrderLogs from './components/Shipper/WorkOrderLogs'
import WorkOrderLogDetails from './components/Shipper/WorkOrderLogDetails'
import AvailableJobs from './components/Trucker/AvailableJobs'
import CreateWorkOrder from './components/Shipper/CreateWorkOrder'
import TestDynamicForm from './components/Shipper/TestDynamicForm'
import TestForm2 from './components/Shipper/TestForm2'
import TestForm3 from './components/Shipper/TestForm3'
import TestForm4 from './components/Shipper/TestForm4'
import TestForm5 from './components/Shipper/TestForm5'
import TestForm6 from './components/Shipper/TestForm6'
import TestForm7 from './components/Shipper/TestForm7'
import TestForm8 from './components/Shipper/TestForm8'
import TestForm9 from './components/Shipper/TestForm9'
import TestForm10 from './components/Shipper/TestForm10'
import TestForm11 from './components/Shipper/TestForm11'
import TestForm12 from './components/Shipper/TestForm12'
import TestForm13 from './components/Shipper/TestForm13'
import TestForm14 from './components/Shipper/TestForm14'
import TestForm15 from './components/Shipper/TestForm15'
import TestForm16 from './components/Shipper/TestForm16'
import TestForm17 from './components/Shipper/TestForm17'
import TestForm18 from './components/Shipper/TestForm18'
import TestForm19 from './components/Shipper/TestForm19'
import TestForm20 from './components/Shipper/TestForm20'
import TestForm21 from './components/Shipper/TestForm21'
import TestForm22 from './components/Shipper/TestForm22'
import TestSelectForm from './components/Shipper/TestSelectForm'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgotpass" component={ForgotPassword} />
      <Route exact path="/shipper/createworkorder" component={CreateWorkOrder} />
      <Route exact path="/shipper/workorder" component={WorkOrder} />
      <Route exact path="/shipper/workorderdetails" component={WorkOrderDetails} />
      <Route exact path="/shipper/edit" component={EditDetails} />
      <Route exact path="/shipper/workorderlogs" component={WorkOrderLogs} />
      <Route exact path="/shipper/workorderlogdetails" component={WorkOrderLogDetails} />
      <Route exact path="/shipper/setting" component={ShipperSetting} />
      <Route exact path="/shipper/contactsdirectory" component={ContactsDirectory} />
      <Route exact path="/shipper/shipmenttype" component={ShipmentType} />
      <Route exact path="/shipper/dashboard" component={ShipperDashboard} />
      <Route exact path="/shipper/form" component={TestDynamicForm} />
      <Route exact path="/shipper/form2" component={TestForm2} />
      <Route exact path="/shipper/form3" component={TestForm3} />
      <Route exact path="/shipper/form4" component={TestForm4} />
      <Route exact path="/shipper/form5" component={TestForm5} />
      <Route exact path="/shipper/form6" component={TestForm6} />
      <Route exact path="/shipper/form7" component={TestForm7} />
      <Route exact path="/shipper/form8" component={TestForm8} />
      <Route exact path="/shipper/form9" component={TestForm9} />
      <Route exact path="/shipper/form10" component={TestForm10} />
      <Route exact path="/shipper/form11" component={TestForm11} />
      <Route exact path="/shipper/form12" component={TestForm12} />
      <Route exact path="/shipper/form13" component={TestForm13} />
      <Route exact path="/shipper/form14" component={TestForm14} />
      <Route exact path="/shipper/form15" component={TestForm15} />
      <Route exact path="/shipper/form16" component={TestForm16} />
      <Route exact path="/shipper/form17" component={TestForm17} />
      <Route exact path="/shipper/form18" component={TestForm18} />
      <Route exact path="/shipper/form19" component={TestForm19} />
      <Route exact path="/shipper/form20" component={TestForm20} />
      <Route exact path="/shipper/form21" component={TestForm21} />
      <Route exact path="/shipper/form22" component={TestForm22} />
      <Route exact path="/shipper/selectform" component={TestSelectForm} />
      <Route exact path="/trucker/setting" component={TruckerSetting} />
      <Route exact path="/trucker/masterdata" component={MasterData} />
      <Route exact path="/trucker/jobs" component={AvailableJobs} />
      <Route exact path="/trucker/workorder" component={TruckerWorkOrder} />
      <Route exact path="/trucker/workorderdetails" component={TruckerWorkOrderDetails} />
      <Route exact path="/trucker/offer" component={TruckerOffer} />
      <Route exact path="/trucker/counteroffer" component={TruckerCounterOffer} />
      <Route exact path="/admin/setting" component={AdminSetting} />
      <Route exact path="/admin/term" component={AdminTerm} />
      <Route exact path="/admin/user" component={UserManagement} />
      <Route exact path="/admin/useredit" component={AdminUserEdit} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/currency" component={CurrencyManagement} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
