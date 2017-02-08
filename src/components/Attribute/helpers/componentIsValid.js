import _ from 'lodash';

const componentIsValid = (ref, props) => {
  const valid = ref.getValue();
  if (valid) {
    props.clearValidationErrors(props.data.id);
  } else {
    const errorIndex = _.findIndex(props.attributes.errors, { id: props.data.id });
    if (!(errorIndex > -1)) {
      console.log('error is found');
      props.dispatchFormError(props.data.id);
    } else {
      console.log('error isnt found');
    }
  }
};

export default componentIsValid;
