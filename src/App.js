import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Grid from 'react-bootstrap/lib/Grid';

import './resources/css/app.css';

import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import EditTime from './views/EditTime';
import Screenshots from './views/Screenshots';
import Reports from './views/Reports';
import Payments from './views/Payments';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Grid fluid={true}>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/edittime" component={EditTime}/>
            <Route path="/screenshots" component={Screenshots}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/payments" component={Payments}/>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
