import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Card, CardActions, Button, withStyles } from '@material-ui/core';

// Molecules
import FormHeader from '../../../components/Molecules/FormHeader';

import styles from './styles';

const FormMaterial = props => {
  const { classes, title, subtitle, children, validate, onSubmit } = props;
  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
      <FormHeader title={title} subtitle={subtitle} />
      <Card className={classes.content}>
        {children}
        <CardActions>
          <Button color="primary">Cancelar</Button>
          <Button
            color="primary"
            variant="contained"
            disabled={validate()}
            type="submit">
            Guardar
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

FormMaterial.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  validate: PropTypes.func,
  onSubmit: PropTypes.func
};

// Apply styles
const _FormMaterial = withStyles(styles)(FormMaterial);

export default _FormMaterial;
