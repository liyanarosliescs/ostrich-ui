import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ShipperWorkOrder from './components/ShipperWorkOrder'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/shipper/workorder" component={ShipperWorkOrder} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
