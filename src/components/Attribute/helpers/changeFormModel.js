import { getDataTypeStringNumberStruct } from './../rules';

export const changeFormToStringNumber = (thisValue, props, formRef) => {
  thisValue.setState({
    struct: getDataTypeStringNumberStruct(props.data.rangeMin, props.data.rangeMax),
  });
  formRef.getValue();
};
