import _ from 'lodash';
import isItLastItem from './isItLastItem';

let validationTimeout = null;

const propsValidations = (nextProps, thisValue) => {
  if (nextProps.attributes.validateAttributes) {
    console.log('validate attributes', thisValue.props.data.category);
    thisValue.updateAndValidate(nextProps);
    console.log('validate', thisValue.props.data.id);
    if (isItLastItem(nextProps.attributes.attributesList, thisValue.props.data.id)) {
      console.log('Stop validations', nextProps.data.id, nextProps.attributes.attributesList.length);
      thisValue.props.clearAllAttributesValidation();
    }
  }
  if (thisValue.props.data.name !== nextProps.data.name) {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(() => {
      thisValue.props.validateAllAttributes();
    }, 1000);
  }
  if (thisValue.props.data.defaultValue !== nextProps.data.defaultValue
    || thisValue.props.data.description !== nextProps.data.description) {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(() => {
      thisValue.updateAndValidate(nextProps);
    }, 1000);
  }
  if (thisValue.props.data.rangeMin !== nextProps.data.rangeMin
    || thisValue.props.data.rangeMax !== nextProps.data.rangeMax
    || thisValue.props.data.accuracy !== nextProps.data.accuracy
    || thisValue.props.data.precision !== nextProps.data.precision
    || thisValue.props.data.unitOfMeasurement !== nextProps.data.unitOfMeasurement
  ) {
    if (thisValue.state.structType === 'StringNumberStruct' && nextProps.data.rangeMin !== null) {
      thisValue.updateAndValidate(nextProps);
    }
  }
  if (nextProps.attributes.deleteAttributeSuccess) {
    thisValue.updateAndValidate(nextProps);
    thisValue.props.clearDeleteAttributeSuccess();
  }
};

export default propsValidations;
