import React, { Component } from 'react';
import t from 'tcomb-form';
import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { changeAttribute, changeEnumerationsDefault } from './../../actions';
import { dataTypeStringNoneStruct, baseStruct } from './rules';
import { stringFormatOptions, objectFormatOptions, formOptions } from './options';

const Form = t.form.Form;

class Attribute extends Component {
  constructor() {
    super();
    this.inputChanged = this.inputChanged.bind(this);
    this.state = {
      formOptions,
      struct: dataTypeStringNoneStruct,
      enumerationsData: '',
    };
  }
  componentDidUpdate() {
    console.log(this.props.data);
  }
  inputChanged(value, path) {
    console.log('here');
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
            struct: baseStruct,
          });
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
          this.props.changeEnumerationsDefault(this.props.data.id, []);
        }
        if (value.format === 'number') {
          this.setState({
            struct: baseStruct,
          });
          this.props.changeEnumerationsDefault(this.props.data.id, null);
        }
        if (value.format === 'boolean' || value.format === 'date-time' || value.format === 'cdata' || value.format === 'uri') {
          this.setState({
            struct: baseStruct,
          });
          this.props.changeEnumerationsDefault(this.props.data.id, null);
        }
        attributeData.field = path[0];
        attributeData.value = value.format;
        this.props.changeAttribute(attributeData);
        break;
      }
      case 'enumerationsData':
        this.setState({ enumerationsData: value.enumerationsData });
        break;
      default:
        console.log('Default case');
    }
  }
  renderEnumerationsFieldOptions() {
    if (this.props.data.enumerations) {
      return (
        <Button color="primary">Save</Button>
      );
    }
    return null;
  }

  render() {
    const { name, description, defaultValue, dataType, format } = this.props.data;
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
                  value={{ name, description, defaultValue, dataType, format, enumerationsData }}
                />
                {this.renderEnumerationsFieldOptions()}
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(null, { changeAttribute, changeEnumerationsDefault })(Attribute);
