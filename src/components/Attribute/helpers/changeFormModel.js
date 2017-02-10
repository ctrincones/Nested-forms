import _ from 'lodash';
import { getDataTypeStringNumberStruct, getBaseStruct, getDataTypeStringNoneStruct } from './../rules';

export const changeFormToStringNumber = (thisValue, props) => {
  thisValue.setState({
    struct: getDataTypeStringNumberStruct(props.data.rangeMin, props.data.rangeMax, null),
    structType: 'StringNumberStruct',
  });
};

export const updateFormModel = (thisValue, props, structType) => {
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
      console.log(props.data.rangeMin);
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
};