import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import SignUp from './components/SignUp'
import SignUp2 from './components/SignUp2'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup2" component={SignUp2} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
