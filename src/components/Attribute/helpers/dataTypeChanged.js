import { stringFormatOptions, objectFormatOptions, formOptions } from './../options';
import { getDataTypeStringNoneStruct, getBaseStruct } from './../rules';
import componentIsValid from './componentIsValid';
import enumerationOptions from './../Layout/enumerationOptions';

const dataTypeChanged = (dataTypeValue, thisValue, props) => {
  let formatOption;
  if (dataTypeValue === 'object') {
    formatOption = objectFormatOptions;
    thisValue.setState({
      struct: getBaseStruct(null, dataTypeValue),
      structType: 'baseStruct',
    });
    setTimeout(() => {
      componentIsValid(thisValue.refs.form, props);
      thisValue.setState({
        formOptions: formOptions(null, thisValue, true),
      });
    }, 600);
    props.changeDatatypeStringNumberDefault(props.data.id, null);
  } else if (dataTypeValue === 'string') {
    formatOption = stringFormatOptions;
    thisValue.setState({
      struct: getDataTypeStringNoneStruct(null),
      structType: 'StringNoneStruct',
    });
    thisValue.updateFormOptions();
    setTimeout(() => {
      componentIsValid(thisValue.refs.form, props);
    }, 600);
  }
  props.changeEnumerationsDefault(props.data.id, []);
  setTimeout(() => {
    thisValue.setState({
      formOptions: {
        ...thisValue.state.formOptions,
        fields: {
          ...thisValue.state.formOptions.fields,
          format: {
            ...thisValue.state.formOptions.fields.format,
            options: formatOption,
          },
        },
      },
    });
  }, 600);
};

export default dataTypeChanged;
