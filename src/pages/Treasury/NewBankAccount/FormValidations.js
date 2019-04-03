const FormValidations = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Este campo es requerido';
  }

  if (!values.bank) {
    errors.bank = 'Este campo es requerido';
  }

  if (!values.type) {
    errors.type = 'Este campo es requerido';
  }

  if (!values.number) {
    errors.number = 'Este campo es requerido';
  } else if (values.number.length < 20) {
    errors.number = 'Debe contener minimo 20 caracteres';
  } else if (values.number.length > 20) {
    errors.number = 'Debe contener maximo 20 caracteres';
  }

  return errors;
};

export default FormValidations;
