import { stringFormatOptions, objectFormatOptions } from './../options';
import { getDataTypeStringNoneStruct, getBaseStruct } from './../rules';

const dataTypeChanged = (dataTypeValue, thisValue, props) => {
  let formatOption;
  if (dataTypeValue === 'object') {
    formatOption = objectFormatOptions;
    thisValue.setState({
      struct: getBaseStruct(null),
      structType: 'baseStruct',
    });
    props.changeDatatypeStringNumberDefault(props.data.id, null);
    props.changeEnumerationsDefault(props.data.id, null);
  } else if (dataTypeValue === 'string') {
    formatOption = stringFormatOptions;
    thisValue.setState({
      struct: getDataTypeStringNoneStruct(null),
      structType: 'StringNoneStruct',
    });
    props.changeEnumerationsDefault(props.data.id, []);
  }
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
};

export default dataTypeChanged;
