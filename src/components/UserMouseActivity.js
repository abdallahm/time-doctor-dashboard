import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Image from 'react-bootstrap/lib/Image';

import Widget from '../components/Widget';
import UsersActivities from '../data/UsersActivities';

const userActivity = props => (
  <div key={props.name}>
    <Col xs={6}>
      <Image src={"/assets/images/" + props.img + ".png"} circle />
      <span>{props.name}</span>
    </Col>
    <Col xs={6}>
      <div className="pull-left progress-bar-item">
        <ProgressBar bsStyle="success" now={props.percentage} label={`${props.percentage}%`}/>
      </div>
      <div className="pull-right percentage">
        {props.percentage}%
      </div>
    </Col>
    <div className="clearfix"></div>
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
    settingsMenu={true}>
    {
      UsersActivities.map(activity => 
        userActivity(activity)
      )
    }
	</Widget>
)

export default UserMouseActivity;
