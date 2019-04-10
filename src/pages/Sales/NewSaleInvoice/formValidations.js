const formValidations = values => {
  const errors = {};
  if (values.entity) {
    errors.entity = {};
    if (!values.entity.type) {
      errors.entity.type = 'Seleccione el tipo de cliente';
    }
    if (values.entity.type) {
      if (!values.entity.phone) {
        errors.entity.phone = 'Este campo es requerido';
      }
      if (!values.entity.email) {
        errors.entity.email = 'Este campo es requerido';
      }
      if (!values.entity.address) {
        errors.entity.address = 'Este campo es requerido';
      }
    }
    if (values.entity.type === 'natural') {
      if (!values.entity.dni) {
        errors.entity.dni = 'Este campo es requerido';
      }
    }
    if (values.entity.type === 'juridico') {
      if (!values.entity.rif) {
        errors.entity.rif = 'Este campo es requerido';
      }
    }
    if (values.entity.type === 'newNatural') {
      if (!values.entity.dni) {
        errors.entity.dni = 'Este campo es requerido';
      }
      if (!values.entity.firstname) {
        errors.entity.firstname = 'Este campo es requerido';
      }
      if (!values.entity.lastname) {
        errors.entity.lastname = 'Este campo es requerido';
      }
    }
    if (values.entity.type === 'newJuridico') {
      if (!values.entity.rif) {
        errors.entity.rif = 'Este campo es requerido';
      }
      if (!values.entity.name) {
        errors.entity.name = 'Este campo es requerido';
      }
    }
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
        if (product.iva !== 0) {
          productErrors.iva = 'Requerido';
          productsErrors[productIndex] = productErrors;
        }
      }
    });
    if (productsErrors.length) {
      errors.products = productsErrors;
    }
  }
  return errors;
};

export default formValidations;
