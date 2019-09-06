import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignUp from './components/SignUp'
import ShipperWorkOrder from './components/ShipperWorkOrder'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/shipper/workorder" component={ShipperWorkOrder} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
