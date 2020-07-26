interface IError {
  [key: string]: string;
}

function validateTodoInput(content: string) {
  const errors = <IError>{};

  if (content.trim() === '') {
    errors.content = 'Please add an item!';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export { validateTodoInput };
