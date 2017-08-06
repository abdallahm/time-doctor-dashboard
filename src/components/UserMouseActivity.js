import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Image from 'react-bootstrap/lib/Image';

import Widget from '../components/Widget';
import UsersActivities from '../data/UsersActivities';

const userActivity = props => (
  <div key={props.name} className="row">
    <Col xs={6}>
      <Image src={"/assets/images/" + props.img + ".jpg"} circle />
      <span>{props.name}</span>
    </Col>
    <Col xs={6}>
      <div className="pull-left progress-bar-item">
        <ProgressBar bsStyle="success" now={props.percentage}/>
      </div>
      <div className="pull-right percentage">
        {props.percentage}%
      </div>
    </Col>
    <div className="clearfix"></div>
  </div>
)

const footer = (
  <div>
    <Image src={"/assets/images/avatar-1.jpg"} circle />
    <Image src={"/assets/images/avatar-2.jpg"} circle />
    <Image src={"/assets/images/avatar-3.jpg"} circle />
    <span>+10 more</span>
  </div>
) 

const UserMouseActivity = props => (
	<Widget 
		title="Keyboard & Mouse Activity"
    optionsMenu={[
      {
        title: "Daily",
        onSelect(event){
          console.log(1);
        }
      },{
        title: "Monthly",
        onSelect(event){
          console.log(2);
        }
      }
    ]}
    settingsMenu={true}
    footer={footer}>
    {
      UsersActivities.map(activity => 
        userActivity(activity)
      )
    }
	</Widget>
)

export default UserMouseActivity;
