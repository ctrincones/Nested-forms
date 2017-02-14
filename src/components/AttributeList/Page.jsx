import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Button from 'muicss/lib/react/button';
import TabContent from './TabContent';
import { CategoriesData } from './../FormData';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      categories: CategoriesData,
    };
  }
  render() {
    const categoriesTab = this.state.categories.map((value, index) => {
      return (
        <Tab
          value={value.category}
          label={value.category}
          key={index}
        >
          <TabContent category={value.category} />
        </Tab>
      );
    });
    const formErrorStatus = this.props.attributes.errors.length > 0;
    const attributeListStatus = this.props.attributes.attributesList.length < 1;
    return (
      <Grid className="App-container">
        <Row className="header">
          <Col md={12}>
            <h2>Nested Form</h2>
          </Col>
        </Row>
        <Row className="Attributes-form">
          <Col md={7} className="Main-tab">
            <Tabs defaultSelectedIndex={0}>
              { categoriesTab }
            </Tabs>
            <div className="Form-buttons-container">
              <Button color="primary" disabled={formErrorStatus || attributeListStatus}>Save</Button>
              <Button color="danger">Cancel</Button>
            </div>
          </Col>
          <Col xs={5} className="Json-output">
            <h2 className="Json-output-title">Live JSON output</h2>
            <pre>{JSON.stringify(this.props.attributes.attributesList, null, 2)}</pre>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
  };
};

export default connect(mapStateToProps)(Page);
