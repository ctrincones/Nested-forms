import _ from 'lodash';
import { getDataTypeStringNumberStruct, getBaseStruct, getDataTypeStringNoneStruct } from './../rules';

export const changeFormToStringNumber = (thisValue, props, formRef) => {
  thisValue.setState({
    struct: getDataTypeStringNumberStruct(props.data.rangeMin, props.data.rangeMax, null),
    structType: 'StringNumberStruct',
  });
  formRef.validate();
};

export const updateFormModel = (thisValue, props, formRef, structType) => {
  const filteredList = _.filter(props.attributes.attributesList, (value) => {
    return value.id !== props.data.id;
  });
  switch (structType) {
    case 'StringNoneStruct':
      thisValue.setState({
        struct: getDataTypeStringNoneStruct(filteredList),
      });
      break;
    case 'StringNumberStruct':
      thisValue.setState({
        struct: getDataTypeStringNumberStruct(props.data.rangeMin,
           props.data.rangeMax,
           filteredList),
      });
      break;
    case 'baseStruct':
      thisValue.setState({
        struct: getBaseStruct(filteredList),
      });
      break;
    default:
      break;
  }
  formRef.validate();
};
