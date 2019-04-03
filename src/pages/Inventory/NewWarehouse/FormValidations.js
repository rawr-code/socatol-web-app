const FormValidations = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Este campo es requerido';
  } else if (values.name.length < 7) {
    errors.name = 'Debe contener al menos 7 caracteres';
  } else if (values.name.length > 40) {
    errors.name = 'Debe contener menos a 40 caracteres';
  }

  return errors;
};

export default FormValidations;
