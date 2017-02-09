import _ from 'lodash';

const componentIsValid = (ref, props) => {
  const valid = ref.getValue();
  if (valid) {
    props.clearValidationErrors(props.data.id);
  } else {
    console.log('not valid');
    const errorIndex = _.findIndex(props.attributes.errors, { id: props.data.id });
    if (!(errorIndex > -1)) {
      props.dispatchFormError(props.data.id);
    }
  }
};

export default componentIsValid;
