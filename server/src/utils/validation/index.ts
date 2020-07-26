interface IValidate {
  [key: string]: string;
}

function validateInput(inputs: IValidate) {
  const errors = <IValidate>{};

  for (const input in inputs) {
    if (inputs[input].trim() === '') {
      errors[input] = inputs[input];
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export { validateInput };
