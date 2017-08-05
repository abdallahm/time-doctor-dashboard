import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';


class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { optionsMenuSelected: 0 };
  }
  renderHeader(){
    const {title, optionsMenu, settingsMenu} = this.props;
    
    
    return (
      <div>
        <div className="pull-left">{title}</div>
        <div className="pull-right">
          {optionsMenu && 
            <DropdownButton 
              bsStyle="link" 
              title={optionsMenu[this.state.optionsMenuSelected].title} 
              key={1} 
              id="sdfsdf" 
              onSelect={(key, event) => {
                this.setState({optionsMenuSelected:key});
                let onSelect = optionsMenu[key].onSelect;
                if(onSelect){
                  onSelect(event);
                }
              }}>
              {
                optionsMenu.map((item, i) => 
                  <MenuItem eventKey={i} key={i}>{item.title}</MenuItem>
                )
              }
            </DropdownButton>
          }
          {settingsMenu &&
            <DropdownButton id="dropdown-custom-1" bsStyle="link" title={<Glyphicon glyph="option-vertical" />} noCaret>
                <MenuItem eventKey="1">Edit Widget</MenuItem>
                <MenuItem eventKey="2">Delete Widget</MenuItem>
            </DropdownButton>
          }

        </div>
        
        <div className="clearfix"></div>
      </div>
    )
  }
  renderFooter(){

  }
  render() {
    let header = this.renderHeader();
    return (
      <div>
      	<Panel className="widget" header={header} footer="Panel footer">
        {this.props.children}
      </Panel>
      </div>
    );
  }
}

export default Widget;