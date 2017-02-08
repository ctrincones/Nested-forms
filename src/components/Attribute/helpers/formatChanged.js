import { getDataTypeStringNoneStruct, getDataTypeStringNumberStruct, getBaseStruct } from './../rules';

const formatChanged = (formatValue, thisValue, props) => {
  if (formatValue === 'none') {
    thisValue.setState({
      struct: getDataTypeStringNoneStruct(),
    });
    props.changeDatatypeStringNumberDefault(props.data.id, null);
    props.changeEnumerationsDefault(props.data.id, []);
  }
  if (formatValue === 'number') {
    thisValue.setState({
      struct: getDataTypeStringNumberStruct(),
    });
    props.changeDatatypeStringNumberDefault(props.data.id, true);
    props.changeEnumerationsDefault(props.data.id, null);
  }
  if (formatValue === 'boolean' || formatValue === 'date-time' || formatValue === 'cdata' || formatValue === 'uri') {
    thisValue.setState({
      struct: getBaseStruct(),
    });
    props.changeEnumerationsDefault(props.data.id, null);
    props.changeDatatypeStringNumberDefault(props.data.id, null);
  }
};

export default formatChanged;
