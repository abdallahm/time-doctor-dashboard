import React, {Component} from 'react';
import Col from 'react-bootstrap/lib/Col';
import AmCharts from '@amcharts/amcharts3-react';

import Widget from '../components/Widget';
import HighestMobileUsersChart from '../data/HighestMobileUsersChart';

const footer = (
  <div className="footer-padding">
    <div className="pull-left">
      <div className="square" style={{backgroundColor: "#56bc74"}}></div>
    </div>
    <div className="pull-left">
      <div className="title">Actual Hours</div>
    </div>
    <div className="pull-left padding-left-20">
      <div className="square" style={{backgroundColor: "#13834d"}}></div>
    </div>
    <div className="pull-left">
      <div className="title">Hours Worked More</div>
    </div>
    <div className="clearfix"></div>
  </div>
) 

class HighestMobileUsers extends Component {

  render() {
    return (
      <Widget 
        title="Highest Mobile Users"
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
        <Col xs={12} md={6}>
          <div className="row labels">
          { 
            HighestMobileUsersChart.labels.map((label, i) => 
              <Col xs={4} md={6} key={i}>
                <div className="row">
                  <div className="pull-left">
                    <div className="circle" style={{backgroundColor: label.color}}></div>
                  </div>
                  <div className="pull-left">
                    <div className="title">{label.title}</div>
                    <div className="subtitle">{label.subtitle}</div>
                  </div>
                </div>
              </Col>
            )
          }
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="chartdiv">
            <AmCharts.React {...HighestMobileUsersChart} />
          </div>
        </Col>
      </Widget>
    );
  }
}


export default HighestMobileUsers;