import _ from 'lodash';
import { formOptions } from './../options';
import { getDataTypeStringNumberStruct, getBaseStruct, getDataTypeStringNoneStruct } from './../rules';

export const changeFormToStringNumber = (thisValue, props) => {
  thisValue.setState({
    struct: getDataTypeStringNumberStruct(props.data.rangeMin, props.data.rangeMax, null),
    structType: 'StringNumberStruct',
    formOptions: formOptions(null, thisValue),
  });
};

export const updateFormModel = (thisValue, props, structType) => {
  const dataType = props.data.dataType;
  return new Promise((resolve, reject) => {
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
          struct: getBaseStruct(filteredList, dataType),
        });
        break;
      default:
        break;
    }
    resolve();
  });
};
