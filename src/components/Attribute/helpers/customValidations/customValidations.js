

export const validateRangeFields = (propOldVal, props, thisValue ) => {
  const interval = setInterval(() => {
    if (propOldVal.value !== props.data[field]) {
      updateFormModel(thisValue, props, thisValue.state.structType);
      componentIsValid(thisValue.refs.form, props);
      clearInterval(interval);
    }
  }, 200);
}
