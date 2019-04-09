import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';

// Molecules
import WizardFormPage from '../../../components/Molecules/WizardFormPage';

// Fields
import ClientForm from './ClientForm';
import ProductsForm from './ProductsForm';
import DetailsForm from './DetailsForm';

// Validations
// import validate from './FormValidations';

const Form = props => {
  const { handleSubmit, activeStep, nextPage, previousPage } = props;
  const steps = [
    {
      label: 'Cliente',
      title: 'Información del cliente'
    },
    {
      label: 'Productos',
      title: 'Lista de productos'
    },
    {
      label: 'Información adicional',
      title: 'Detalles de la factura'
    },
    {
      label: 'Resumen',
      title: 'Resumen'
    }
  ];
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(item => (
          <Step key={item.label}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <WizardFormPage title={steps[activeStep].title}>
          <ClientForm onSubmit={nextPage} />
        </WizardFormPage>
      )}
      {activeStep === 1 && (
        <WizardFormPage
          noPadding
          title={steps[activeStep].title}
          previousPage={previousPage}>
          <ProductsForm onSubmit={nextPage} />
        </WizardFormPage>
      )}
      {activeStep === 2 && (
        <WizardFormPage
          title={steps[activeStep].title}
          previousPage={previousPage}>
          <DetailsForm onSubmit={handleSubmit} />
        </WizardFormPage>
      )}
    </div>
  );
};

export default Form;
