import t from 'tcomb-form';

export const validator = (dataType, validationsArray, optionalValidationsParams) => {
  return t.refinement(dataType, (value) => {
    let validationStatus = [];
    for (let i = 0; i < validationsArray.length; i += 1) {
      validationStatus.push(validationsArray[i](value, optionalValidationsParams));
    }
    if (validationStatus.indexOf(false) > -1) {
      return false;
    }
    return true;
  });
};
