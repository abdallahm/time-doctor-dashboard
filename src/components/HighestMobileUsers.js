import React, {Component} from 'react';
import Col from 'react-bootstrap/lib/Col';

import Widget from '../components/Widget';

const AmCharts = require("@amcharts/amcharts3-react");

const config = {
      "type": "gauge",
      "theme": "light",
      "axes": [{
        "axisAlpha": 0,
        "tickAlpha": 0,
        "labelsEnabled": false,
        "startValue": 0,
        "endValue": 100,
        "startAngle": 0,
        "endAngle": 360,
        "centerX": "0%",
        "centerY": "0%",
        "axisThickness": 10,
        "bands": [{
          "color": "#d8dde6",
          "startValue": 0,
          "endValue": 100,
          "radius": "120%",
          "innerRadius": "105%"
        }, {
          "color": "#FED144",
          "startValue": 0,
          "endValue": 85,
          "radius": "120%",
          "innerRadius": "105%",
        },{
          "color": "#d8dde6",
          "startValue": 0,
          "endValue": 100,
          "radius": "100%",
          "innerRadius": "85%"
        }, {
          "color": "#f45364",
          "startValue": 0,
          "endValue": 80,
          "radius": "100%",
          "innerRadius": "85%",
        },{
          "color": "#d8dde6",
          "startValue": 0,
          "endValue": 100,
          "radius": "80%",
          "innerRadius": "65%"
        }, {
          "color": "#24d2eb",
          "startValue": 0,
          "endValue": 75,
          "radius": "80%",
          "innerRadius": "65%",
        },{
          "color": "#d8dde6",
          "startValue": 0,
          "endValue": 100,
          "radius": "60%",
          "innerRadius": "45%"
        }, {
          "color": "#5d6dbd",
          "startValue": 0,
          "endValue": 70,
          "radius": "60%",
          "innerRadius": "45%",
        },{
          "color": "#d8dde6",
          "startValue": 0,
          "endValue": 100,
          "radius": "40%",
          "innerRadius": "25%"
        }, {
          "color": "#3fc299",
          "startValue": 0,
          "endValue": 40,
          "radius": "40%",
          "innerRadius": "25%",
        }]
      }],
      "labels": [{
        "title": "Benjamin Tyler",
        "subtitle": "20h 45m",
        "color": "#FED144",
      }, {
        "title": "Darrel Hart",
        "subtitle": "20h 45m",
        "color": "#f45364",
      }, {
        "title": "Lester Douglas",
        "subtitle": "20h 45m",
        "color": "#24d2eb",
      }, {
        "title": "Georgia Harper",
        "subtitle": "20h 45m",
        "color": "#5d6dbd",
      },{
        "title": "Olga Simpson",
        "subtitle": "20h 45m",
        "color": "#3fc299",
      }]
  };

const footer = (
  <div>
 
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
            config.labels.map((label, i) => 
              <Col xs={12} md={6} key={i}>
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
            <AmCharts.React {...config} />
          </div>
        </Col>
      </Widget>
    );
  }
}


export default HighestMobileUsers;