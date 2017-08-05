import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';

import UserMouseActivity from '../components/UserMouseActivity';
import HighestMobileUsers from '../components/HighestMobileUsers';

class Dashboard extends Component {
  render() {
    return (
      <div className="row row-extended">
      	<h1>Company Dashboard</h1>
      	<Col xs={12} md={4}>
      		<UserMouseActivity />
        </Col>
        <Col xs={12} md={4} >
      		<HighestMobileUsers />
        </Col>
        {/*<Col xs={12} md={4} >
      		<UserMouseActivity />
        </Col>*/}
      </div>
    );
  }
}

export default Dashboard;