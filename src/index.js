import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ShipperWorkOrder from './components/ShipperWorkOrder'
import ShipperSetting from './components/Shipper/ShipperSetting'
import ContactsDirectory from './components/Shipper/ContactsDirectory'
import ShipmentType from './components/Shipper/ShipmentType'
import TruckerSetting from './components/Trucker/TruckerSetting'
import AdminSetting from './components/Admin/AdminSetting'
import AdminTerm from './components/Admin/TermsOfUse'
import MasterData from './components/Trucker/MasterData'
import UserManagement from './components/Admin/UserManagement'
import AdminDashboard from './components/Admin/Dashboard'
import ShipperDashboard from './components/Shipper/Dashboard'
import CurrencyManagement from './components/Admin/CurrencyManagement'
import WorkOrderLogs from './components/Shipper/WorkOrderLogs'
import WorkOrderLogDetails from './components/Shipper/WorkOrderLogDetails'
import AvailableJobs from './components/Trucker/AvailableJobs'
import CreateWorkOrder from './components/Shipper/CreateWorkOrder'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/shipper/createworkorder" component={CreateWorkOrder} />
      <Route exact path="/shipper/workorder" component={ShipperWorkOrder} />
      <Route exact path="/shipper/workorderlogs" component={WorkOrderLogs} />
      <Route exact path="/shipper/workorderlogdetails" component={WorkOrderLogDetails} />
      <Route exact path="/shipper/setting" component={ShipperSetting} />
      <Route exact path="/shipper/contactsdirectory" component={ContactsDirectory} />
      <Route exact path="/shipper/shipmenttype" component={ShipmentType} />
      <Route exact path="/shipper/dashboard" component={ShipperDashboard} />
      <Route exact path="/trucker/setting" component={TruckerSetting} />
      <Route exact path="/trucker/masterdata" component={MasterData} />
      <Route exact path="/trucker/jobs" component={AvailableJobs} />
      <Route exact path="/admin/setting" component={AdminSetting} />
      <Route exact path="/admin/term" component={AdminTerm} />
      <Route exact path="/admin/user" component={UserManagement} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/currency" component={CurrencyManagement} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
