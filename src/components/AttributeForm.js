import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Button from 'muicss/lib/react/button';

import AttributesContainer from './AttributesContainer';

class AttributeForm extends Component {
    constructor() {
      super();
      this.state = {
        categories: [
           {
             category: "Attributes 1"
           },
           {
             category: "Attributes 2"
           },
           {
             category: "Attributes 3"
           },
        ]
      }
    }
    onChange(i, value, tab, ev) {
      //console.log(arguments);
    }
    onActive(tab) {
     //console.log(arguments);
    }
   render() {
    const categoriesTab = this.state.categories.map((value,index) => {
        return (
          <Tab value={value.category} label={value.category}  key={index} onActive={this.onActive.bind(this)}>
             <AttributesContainer category={value.category} />
          </Tab>
        );
    });
    return (
      <Grid>
        <Row className="header">
          <Col md={12}>
            <h2>Nested Form</h2>
          </Col>
        </Row>
        <Row className="Attributes-form">
          <Col md={12}>
           <Tabs onChange={this.onChange} defaultSelectedIndex={0}>
             { categoriesTab }
           </Tabs>
           <div className="Form-buttons-container">
              <Button color="primary">Save</Button>
              <Button color="danger">Cancel</Button>
           </div>
         </Col>
        </Row>
        <Row>
           <Col xs={4} xsOffset={4} className="Json-output">
                <h2>Live JSON output</h2>
                <pre>{JSON.stringify(this.props.attributes.attributeslist, null, 2)}</pre>
           </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes
  };
}

export default connect(mapStateToProps)(AttributeForm);
