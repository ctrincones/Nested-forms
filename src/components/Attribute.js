import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAttribute } from './../actions';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Button from 'muicss/lib/react/button';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      showfields: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  showFields() {
    this.setState({ showfields: true });
  }
  hideFields() {
    this.setState({ showfields: false });
  }
  handleInputChange(e) {
    const attributeData = {
      name: e.target.name,
      value: e.target.value,
      id: this.props.data.id
    };
    this.props.changeAttribute(attributeData);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  renderDisplayButton() {
    if(this.state.showfields){
      return(
        <Button variant="fab" size="small" onClick={this.hideFields.bind(this)}>-</Button>
      );
    }
    return(
      <Button variant="fab" size="small" onClick={this.showFields.bind(this)}>+</Button>
    );
  }
  renderFormat (){
    if(this.props.data.datatype.type === 'STRING') {
      return (
        <Col xs={6} className="Input-container">
          <Select name="format" defaultValue={this.props.data.datatype.format.type} label="Format: " onChange={this.handleInputChange}>
            <Option value="NONE" label="NONE" />
            <Option value="NUMBER" label="NUMBER" />
            <Option value="BOOLEAN" label="BOOLEAN" />
            <Option value="DATE-TIME" label="DATE-TIME" />
            <Option value="CDATA" label="CDATA" />
            <Option value="URI" label="URI" />
          </Select>
        </Col>
      );
    }
   return (
      <Col xs={6} className="Input-container">
       <Select defaultValue="NONE" label="Format:">
         <Option value="NONE" label="NONE" />
        </Select>
      </Col>
    );
  }
  renderFields() {
    if (this.state.showfields){
      return (
      <section>
        <Grid className="Input-grid">
         <Row>
          <Col xs={6} className="Input-container">
           <Select defaultValue={this.props.data.devicert} label="Device Resource type">
             <Option value="Default value" label="Default value" />
            </Select>
          </Col>
          <Col xs={6} className="Input-container">
           <Input label="Default value:" hint="Enter a default value" value={this.props.data.defaultvalue} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="Input-container">
           <Select name="datatype" defaultValue={this.props.data.datatype.type} label="Data type" onChange={this.handleInputChange}>
             <Option value="STRING" label="String" />
             <Option value="OBJECT" label="Object" />
            </Select>
          </Col>
           {this.renderFormat()}
        </Row>
       </Grid>
        {this.renderDataTypeFields()}
     </section>
      );
    }
  }
  renderDataTypeFields() {
    if(this.props.data.datatype.format.type === 'NONE' && this.props.data.datatype.type === 'STRING'){
      const enumerations = this.props.data.datatype.format.enumerations.map((value, key) => {
        return (
          <p key={key}>{value}</p>
        );
      });
      return (
        <Grid className="Input-grid">
          <Row>
            <Col xs={4}>
               <Input label="Enumerations:" hint="Enter value" />
            </Col>
            <Col xs={2}>
               <Button color="primary" size="small">Add</Button>
            </Col>
            <Col>
               { enumerations }
            </Col>
          </Row>
        </Grid>
      );
    } else if(this.props.data.datatype.format.type === 'NUMBER'){
      return (
        <Grid className="Input-grid">
           <Row>
              <Col xs={6}>
                  <Input label="Range" hint="Range min" />
              </Col>
              <Col xs={6}>
                  <Input label="" hint="Range max" />
              </Col>
           </Row>
           <Row>
             <Col xs={4}>
                <Input label="Unit of Measurement: " hint="Uom (eg. mm)" />
             </Col>
             <Col xs={4}>
               <Input label="Precision:" hint="Precision (eg. (0.5))" />
             </Col>
             <Col xs={4}>
               <Input label="Accuracy:" hint="Accuracy (eg. (0.5))" />
             </Col>
           </Row>
        </Grid>
      );
    }
  }
  render() {
    return (
      <section>
      <Grid className="Input-grid">
        <Row>
          <Col xs={12} className="Display-button-container">
            {this.renderDisplayButton()}
          </Col>
        </Row>
        <Row>
           <Col xs={6} className="Input-container">
              <Input label="Name:" hint="Enter a name" value={this.props.data.name} />
           </Col>
           <Col xs={6} className="Input-container">
              <Input label="Description:" hint="Enter a description" value={this.props.data.description} />
           </Col>
        </Row>
      </Grid>
      {this.renderFields()}
    </section>
    );
  }
}

export default connect(null,{ changeAttribute })(Attribute);
