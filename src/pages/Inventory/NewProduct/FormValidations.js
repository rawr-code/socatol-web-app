const FormValidations = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Este campo es requerido';
  } else if (values.name.length < 5) {
    errors.name = 'Debe contener al menos 5 caracteres';
  }

  if (!values.quantity) {
    errors.quantity = 'Este campo es requerido';
  } else if (values.quantity.length < 1) {
    errors.quantity = 'Debe ser mayor a 0';
  }

  if (!values.iva) {
    errors.iva = 'Este campo es requerido';
  }

  if (!values.price) {
    errors.price = 'Este campo es requerido';
  }

  if (!values.warehouse) {
    errors.warehouse = 'Este campo es requerido';
  }

  return errors;
};

export default FormValidations;
