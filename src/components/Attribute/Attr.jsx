import React, { Component } from 'react';
import t from 'tcomb-form';
import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import _ from 'lodash';
import {
  changeAttribute,
  changeEnumerationsDefault,
  addEnumerationValue,
  changeDatatypeStringNumberDefault,
  deleteAttribute,
  dispatchFormError,
  clearValidationErrors,
  deleteEnumerationValue,
  validateAllAttributes,
  clearAllAttributesValidation,
  clearDeleteAttributeSuccess,
} from './../../actions';
import { getDataTypeStringNoneStruct } from './rules';
import { stringFormatOptions, objectFormatOptions, formOptions } from './options';
import { changeFormToStringNumber, updateFormModel } from './helpers/changeFormModel';
import componentIsValid from './helpers/componentIsValid';
import dataTypeChanged from './helpers/dataTypeChanged';
import formatChanged from './helpers/formatChanged';
import propsValidations from './helpers/propsValidations';

const Form = t.form.Form;

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      formOptions,
      struct: getDataTypeStringNoneStruct(null),
      enumerationsData: '',
      structType: 'StringNoneStruct',
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.addEnumerationValue = this.addEnumerationValue.bind(this);
    this.deleteAttr = this.deleteAttr.bind(this);
    this.changeAttributeData = this.changeAttributeData.bind(this);
  }
  componentDidMount() {
    const attrIsValid = this.refs.form.getValue();
    if (!attrIsValid) {
      this.props.dispatchFormError(this.props.data.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    propsValidations(nextProps, this);
  }
  updateAndValidate(nextProps) {
    updateFormModel(this, nextProps, this.state.structType)
    .then(() => {
      componentIsValid(this.refs.form, nextProps);
    });
  }
  changeAttributeData(data, field, value) {
    const attributeData = data;
    attributeData.field = field;
    attributeData.value = value;
    this.props.changeAttribute(attributeData);
  }
  inputChanged(value, path) {
    const changeOrigin = path[0];
    let attributeData = {
      id: this.props.data.id,
    };
    switch (path[0]) {
      case 'dataType': {
        dataTypeChanged(value[changeOrigin], this, this.props);
        break;
      }
      case 'format': {
        formatChanged(value[changeOrigin], this, this.props);
        break;
      }
      case 'enumerationsData':
        this.setState({ enumerationsData: value.enumerationsData });
        break;
      default:
        break;
    }
    this.changeAttributeData(attributeData, path[0], value[changeOrigin]);
  }
  addEnumerationValue() {
    this.props.addEnumerationValue(this.props.data.id, this.state.enumerationsData);
    this.setState({ enumerationsData: '' });
  }
  deleteEnumerationValue(index) {
    this.props.deleteEnumerationValue(this.props.data.id, index);
  }
  deleteAttr() {
    this.props.deleteAttribute(this.props.data.id);
  }
  renderEnumerationsFieldOptions() {
    if (this.props.data.enumerations) {
      const enumerationData = this.props.data.enumerations.map((value, index) => {
        return (
          <div key={index} className="Enumeration-value">
            <p>{value} <button onClick={this.deleteEnumerationValue.bind(this, index)}><i className="fa fa-minus-circle Delete-icon" /></button></p>
          </div>
        );
      });
      return (
        <Grid className="Input-grid">
          <Row className="Attribute-rows">
            <Col xs={4} xsOffset={4} className="Enumerations-data">
              <Button
                color="primary"
                disabled={this.state.enumerationsData === ''}
                onClick={this.addEnumerationValue}
              >
              Add
            </Button>
              <div>
                {enumerationData}
              </div>
            </Col>
          </Row>
        </Grid>
      );
    }
    return null;
  }

  render() {
    const {
      name,
      description,
      defaultValue,
      dataType,
      format,
      deviceResourceType,
      rangeMin,
      rangeMax,
      unitOfMeasurement,
      precision,
      accuracy,
    } = this.props.data;
    const { enumerationsData } = this.state;
    return (
      <section>
        <Grid className="Input-grid">
          <Row>
            <Col xs={12}>
              <div className="Form-container">
                <Form
                  ref="form"
                  type={this.state.struct}
                  onChange={this.inputChanged}
                  options={this.state.formOptions}
                  value={{
                    name,
                    description,
                    defaultValue,
                    dataType,
                    format,
                    enumerationsData,
                    deviceResourceType,
                    rangeMin,
                    rangeMax,
                    unitOfMeasurement,
                    precision,
                    accuracy,
                  }}
                />
                {this.renderEnumerationsFieldOptions()}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="Delete-button">
              <Button color="danger" size="small" onClick={this.deleteAttr}>Delete attribute</Button>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
  };
};

export default connect(mapStateToProps, {
  changeAttribute,
  changeEnumerationsDefault,
  addEnumerationValue,
  changeDatatypeStringNumberDefault,
  deleteAttribute,
  dispatchFormError,
  clearValidationErrors,
  deleteEnumerationValue,
  validateAllAttributes,
  clearAllAttributesValidation,
  clearDeleteAttributeSuccess,
})(Attribute);
