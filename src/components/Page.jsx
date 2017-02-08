import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Button from 'muicss/lib/react/button';
import TabContent from './TabContent';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          category: 'Attributes 1',
        },
        {
          category: 'Attributes 2',
        },
        {
          category: 'Attributes 3',
        },
      ],
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
      <Grid>
        <Row className="header">
          <Col md={12}>
            <h2>Nested Form</h2>
          </Col>
        </Row>
        <Row className="Attributes-form">
          <Col md={12}>
            <Tabs defaultSelectedIndex={0}>
              { categoriesTab }
            </Tabs>
            <div className="Form-buttons-container">
              <Button color="primary" disabled={formErrorStatus}>Save</Button>
              <Button color="danger">Cancel</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} className="Json-output">
            <h2>Live JSON output</h2>
            <pre>{JSON.stringify(this.props.attributes.attributesList, null, 2)}</pre>
            <h2>Validation errors</h2>
            <pre>{JSON.stringify(this.props.attributes.errors, null, 2)}</pre>
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
