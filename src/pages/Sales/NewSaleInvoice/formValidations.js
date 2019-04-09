const formValidations = values => {
  const errors = {};

  // Client

  if (!values.client) {
    errors.client = 'Este campo es requerido';
  }
  if (!values.dni) {
    errors.dni = 'Este campo es requerido';
  }

  // Products
  if (!values.products) {
    errors.products = { _error: 'Se requiere al menos un producto' };
  } else {
    const productsErrors = [];
    values.products.forEach((product, productIndex) => {
      const productErrors = {};
      if (!product.product) {
        productErrors.product = 'Debe seleccionar un producto';
        productsErrors[productIndex] = productErrors;
      }
      if (!product.quantity) {
        productErrors.quantity = 'Requerido';
        productsErrors[productIndex] = productErrors;
      }
      if (!product.iva) {
        productErrors.iva = 'Requerido';
        productsErrors[productIndex] = productErrors;
      }
    });
    if (productsErrors.length) {
      errors.products = productsErrors;
    }
  }

  return errors;
};

export default formValidations;
