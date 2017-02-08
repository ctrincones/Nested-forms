import { getDataTypeStringNumberStruct } from './../rules';

export const changeFormToStringNumber = (thisValue, props) => {
  console.log(props.data.rangeMin);
  thisValue.setState({
    struct: getDataTypeStringNumberStruct(props.data.rangeMin, props.data.rangeMax),
  });
};
