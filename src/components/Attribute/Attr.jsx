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
} from './../../actions';
import { dataTypeStringNoneStruct, getBaseStruct, dataTypeStringNumberStruct } from './rules';
import { stringFormatOptions, objectFormatOptions, formOptions } from './options';

const Form = t.form.Form;

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      formOptions,
      struct: dataTypeStringNoneStruct,
      enumerationsData: '',
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.addEnumerationValue = this.addEnumerationValue.bind(this);
    this.deleteAttr = this.deleteAttr.bind(this);
  }
  componentDidMount() {
    const attrIsValid = this.refs.form.getValue();
    if (!attrIsValid) {
      this.props.dispatchFormError(this.props.data.id);
    }
  }
  inputChanged(value, path) {
    const valid = this.refs.form.getValue();
    if (valid) {
      this.props.clearValidationErrors(this.props.data.id);
    } else {
      const errorIndex = _.findIndex(this.props.attributes.errors, { id: this.props.data.id });
      if (!(errorIndex > -1)) {
        console.log('error is found');
        this.props.dispatchFormError(this.props.data.id);
      } else {
        console.log('error isnt found');
      }
    }
    let attributeData = {
      id: this.props.data.id,
    };
    switch (path[0]) {
      case 'name': {
        attributeData.field = path[0];
        attributeData.value = value.name;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'description': {
        attributeData.field = path[0];
        attributeData.value = value.description;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'defaultValue': {
        attributeData.field = path[0];
        attributeData.value = value.defaultValue;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'dataType': {
        let formatOption;
        if (value.dataType === 'object') {
          formatOption = objectFormatOptions;
          this.setState({
            struct: getBaseStruct(),
          });
          this.props.changeDatatypeStringNumberDefault(this.props.data.id, null);
          this.props.changeEnumerationsDefault(this.props.data.id, null);
        } else if (value.dataType === 'string') {
          formatOption = stringFormatOptions;
          this.setState({
            struct: dataTypeStringNoneStruct,
          });
          this.props.changeEnumerationsDefault(this.props.data.id, []);
        }
        this.setState({
          formOptions: {
            ...this.state.formOptions,
            fields: {
              ...this.state.formOptions.fields,
              format: {
                ...this.state.formOptions.fields.format,
                options: formatOption,
              },
            },
          },
        });
        attributeData.field = path[0];
        attributeData.value = value.dataType;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'format': {
        if (value.format === 'none') {
          this.setState({
            struct: dataTypeStringNoneStruct,
          });
          this.props.changeDatatypeStringNumberDefault(this.props.data.id, null);
          this.props.changeEnumerationsDefault(this.props.data.id, []);
        }
        if (value.format === 'number') {
          this.setState({
            struct: dataTypeStringNumberStruct,
          });
          this.props.changeDatatypeStringNumberDefault(this.props.data.id, true);
          this.props.changeEnumerationsDefault(this.props.data.id, null);
        }
        if (value.format === 'boolean' || value.format === 'date-time' || value.format === 'cdata' || value.format === 'uri') {
          this.setState({
            struct: getBaseStruct(),
          });
          this.props.changeEnumerationsDefault(this.props.data.id, null);
          this.props.changeDatatypeStringNumberDefault(this.props.data.id, null);
        }
        attributeData.field = path[0];
        attributeData.value = value.format;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'enumerationsData':
        this.setState({ enumerationsData: value.enumerationsData });
        break;
      case 'rangeMin': {
        attributeData.field = path[0];
        attributeData.value = value.rangeMin;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'rangeMax': {
        attributeData.field = path[0];
        attributeData.value = value.rangeMax;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'unitOfMeasurement': {
        attributeData.field = path[0];
        attributeData.value = value.unitOfMeasurement;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'precision': {
        attributeData.field = path[0];
        attributeData.value = value.precision;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'accuracy': {
        attributeData.field = path[0];
        attributeData.value = value.accuracy;
        this.props.changeAttribute(attributeData);
        break;
      }
      default:
        console.log('Default case');
    }
  }
  addEnumerationValue() {
    this.props.addEnumerationValue(this.props.data.id, this.state.enumerationsData);
    this.setState({ enumerationsData: '' });
  }
  deleteAttr() {
    this.props.deleteAttribute(this.props.data.id);
  }
  renderEnumerationsFieldOptions() {
    if (this.props.data.enumerations) {
      const enumerationData = this.props.data.enumerations.map((value, index) => {
        return (
          <p key={index}>{value}</p>
        );
      });
      return (
        <div>
          <Button color="primary" onClick={this.addEnumerationValue}>Add</Button>
          {enumerationData}
        </div>
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
              <div className="form-horizontal">
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
})(Attribute);
