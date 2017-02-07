import React, { Component } from 'react';
import t from 'tcomb-form';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { changeAttribute } from './../../actions';
import { mainAttributes } from './rules';
import { dataTypeOptions, stringFormatOptions, objectFormatOptions } from './options';

const Form = t.form.Form;

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      formOptions: {
        fields: {
          deviceResourceType: {
            disabled: true,
            nullOption: false,
            label: 'Device resource type:',
          },
          defaultValue: {
            label: 'Default value:',
          },
          dataType: {
            factory: t.form.Select,
            options: dataTypeOptions,
            nullOption: false,
            label: 'Data Type',
          },
          format: {
            factory: t.form.Select,
            options: stringFormatOptions,
            nullOption: false,
          },
        },
      },
    };
    this.inputChanged = this.inputChanged.bind(this);
  }
  inputChanged(value, path) {
    switch (path[0]) {
      case 'dataType': {
        let formatOption;
        if (value.dataType === 'object') {
          formatOption = objectFormatOptions;
        } else if (value.dataType === 'string') {
          formatOption = stringFormatOptions;
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
        const attributeData = {
          field: path[0],
          value: value.dataType,
          id: this.props.data.id,
        };
        this.props.changeAttribute(attributeData);
        break;
      }
      default:
        console.log('Default case');
    }
  }

  render() {
    const { name, description, defaultValue, dataType, format } = this.props.data;
    return (
      <section>
        <Grid className="Input-grid">
          <Row>
            <Col xs={12}>
              <div className="form-horizontal">
                <Form
                  ref="form"
                  type={mainAttributes}
                  onChange={this.inputChanged}
                  options={this.state.formOptions}
                  value={{ name, description, defaultValue, dataType, format }}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(null, { changeAttribute })(Attribute);
