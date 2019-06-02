import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'shortid';
// Material UI
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  // Typography,
  CardActions
} from '@material-ui/core';

// Molecules
import { FormMaterial } from '../../../components/Molecules';

// Mutations
import { NEW_INVOICE_MUTATION } from '../../../mutations/Invoice';

// Forms
import PersonForm from './PersonForm';
import InvoiceDetailsForm from './InvoiceDetailsForm';
import ProductsListForm from './ProductsListForm';

const SalesInvoiceForm = props => {
  const [selectedPerson, setSelectedPerson] = useState();
  const [personInfo, setPersonInfo] = useState({});
  const [detailsInfo, setDetailsInfo] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [productsListOK, setProductsListOK] = useState(true);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChangeSelectedPerson = value => {
    setSelectedPerson(value);
  };

  const handleChange = stateName => value => {
    if (stateName === 'person') {
      let newPersonInfo = { ...personInfo, ...value };
      setPersonInfo(newPersonInfo);
    }
    if (stateName === 'details') {
      setDetailsInfo(value);
    }
    if (stateName === 'products') {
      let products;
      let err = false;
      if (value && value.length > 0) {
        products = value.map(product => ({
          ...product,
          quantity: product.quantity ? product.quantity : 0
        }));
        setProductsList(products);
      } else {
        console.log('else');
        setProductsListOK(true);
        setProductsList([]);
      }

      products =
        products &&
        products.forEach(product => {
          if (product.quantity <= 0) {
            product.error = true;
            err = true;
          } else {
            product.error = false;
          }
        });
      if (err) {
        setProductsListOK(true);
      }
    }

    return null;
  };

  const handleTest = () => {
    let products = productsList;
    products.push({
      id: shortid.generate(),
      name: '',
      isNew: true,
      price: 0,
      quantity: 0
    });
    setProductsList(products);

    handleChange('products')(products);
  };

  const handleNewProduct = index => e => {
    let products = productsList;
    const { value, name } = e.target;
    // console.log(value);
    products[index][name] = value;

    // console.log(products[index][name]);
    console.log(name, products);
    setProductsList(products);

    handleChange('products')(products);
  };

  const handleOnSubmit = mutate => async () => {
    let person;

    if (selectedPerson.id !== 'new') {
      person = {
        id: selectedPerson.id
      };
    } else {
      person = { ...personInfo, dni: Number(personInfo.dni) };
    }

    const products = productsList.map(
      ({ id, name, price, quantity, isNew }) => {
        if (isNew) {
          return {
            name,
            price: Number(price),
            quantity: Number(quantity)
          };
        }
        return {
          product: id,
          name,
          price: Number(price),
          quantity: Number(quantity)
        };
      }
    );

    const input = {
      ...detailsInfo,
      person,
      products
    };
    console.log(input);

    const result = await mutate({
      variables: { input, type: 'COMPRA' }
    });
    console.log(result);
    props.success(true);
    props.handleClose();
  };

  const { handleClose } = props;

  return (
    <Mutation mutation={NEW_INVOICE_MUTATION}>
      {mutate => (
        <FormMaterial
          md
          title="Factura de compra"
          subtitle="Información de la factura">
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            style={{ padding: 0, paddingBottom: 24 }}>
            <Step>
              <StepLabel>Proveedor</StepLabel>
              <StepContent>
                <PersonForm
                  handleChange={handleChange('person')}
                  data={personInfo}
                  handleChangeSelect={handleChangeSelectedPerson}
                  dataSelect={selectedPerson}
                  handleNext={handleNext}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Productos</StepLabel>
              <StepContent>
                <ProductsListForm
                  handleTest={handleTest}
                  handleNewProduct={handleNewProduct}
                  handleActive={setProductsListOK}
                  handleChange={handleChange('products')}
                  data={productsList}
                />
                <div style={{ marginTop: 24 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    style={{ margin: '0 8px' }}>
                    Volver
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    style={{ margin: '0 8px' }}
                    disabled={productsListOK}>
                    Siguiente
                  </Button>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Detalles de la factura</StepLabel>
              <StepContent>
                <InvoiceDetailsForm
                  handleChange={handleChange('details')}
                  data={detailsInfo}
                />
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    style={{ margin: '0 8px' }}
                    variant="contained"
                    color="primary">
                    Volver
                  </Button>
                </div>
              </StepContent>
            </Step>
          </Stepper>
          <CardActions>
            <Button color="primary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="button"
              onClick={handleOnSubmit(mutate)}
              disabled={
                !detailsInfo.paymentType ||
                !detailsInfo.number ||
                !detailsInfo.ref
              }>
              Confirmar y enviar
            </Button>
          </CardActions>
        </FormMaterial>
      )}
    </Mutation>
  );
};

export default SalesInvoiceForm;
