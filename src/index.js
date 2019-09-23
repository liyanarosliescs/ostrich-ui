import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ShipperWorkOrder from './components/ShipperWorkOrder'
import ShipperSetting from './components/ShipperSetting'
import TruckerSetting from './components/Trucker/TruckerSetting'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/shipper/workorder" component={ShipperWorkOrder} />
      <Route exact path="/shipper/setting" component={ShipperSetting} />
      <Route exact path="/trucker/setting" component={TruckerSetting} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
