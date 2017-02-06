import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAttribute } from './../actions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import t from 'tcomb-form';

const Form = t.form.Form;

const deviceRTypeOptions = t.enums({
  devicert: 'DEFAULT VALUE'
});

const datatypeOptions = [
  {value: 'string', text: 'STRING'},
  {value: 'object', text: 'OBJECT'},
];

const stringFormatOptions = [
  {value: 'none', text: 'NONE'},
  {value: 'number', text: 'NUMBER'},
  {value: 'boolean', text: 'BOOLEAN'},
  {value: 'date-time', text: 'DATE-TIME'},
  {value: 'cdata', text: 'CDATA'},
  {value: 'uri', text: 'URI'}
];

const objectFormatOptions = [
  {value: 'NONE', text: 'NONE'}
];

const mainAttributes = t.struct({
  name: t.String,
  description: t.String,
  devicert: deviceRTypeOptions,
  defaultvalue: t.String,
  datat: t.Str,
  format: t.Str,
});

const attributesWithEnumeration = t.struct({
  name: t.String,
  description: t.String,
  devicert: deviceRTypeOptions,
  defaultvalue: t.String,
  datat: t.Str,
  format: t.Str,
  enumerations: t.String
});

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      formoptions : {
        fields: {
          devicert: {
            disabled: true,
            nullOption: false,
            label: 'Device resource type:'
           },
           defaultvalue: {
             label: 'Default value: '
           },
           datat: {
            factory: t.form.Select,
            options: datatypeOptions,
            nullOption: false,
            label: 'Data Type'
           },
           format: {
            factory: t.form.Select,
            options: stringFormatOptions,
            nullOption: false
          }
        }
      }
    };
    this.inputChanged = this.inputChanged.bind(this);
  }
  componentDidUpdate() {
    console.log(this.props.data);
  }
  inputChanged(value, path) {
    switch(path[0]) {
      case 'datat':
       if(value.datat === 'object'){
         this.setState({ formoptions: {...this.state.formoptions, fields: { ...this.state.formoptions.fields, format: {...this.state.formoptions.fields.format, options: objectFormatOptions } } } });

       }
       else if(value.datat === 'string'){
         this.setState({ formoptions: {...this.state.formoptions, fields: { ...this.state.formoptions.fields, format: {...this.state.formoptions.fields.format, options: stringFormatOptions } } } });
       }
       console.log('Te value has changed');
       const attributeData = {
         path: path[0],
         value: value.datat,
         id: this.props.data.id
       };
       this.props.changeAttribute(attributeData);
       break;
    }
  }

  render() {
    const { name, description, defaultvalue, datat, format } = this.props.data;
    return (
      <section>
      <Grid className="Input-grid">
        <Row>
           <Col xs={12}>
             <div className="form-horizontal">
               <Form
                ref="form"
                type={ mainAttributes }
                onChange={this.inputChanged}
                options={this.state.formoptions}
                value={{ name, description, defaultvalue, datat, format }}
               />
             </div>
           </Col>
        </Row>
      </Grid>
    </section>
    );
  }
}

export default connect(null,{ changeAttribute })(Attribute);
