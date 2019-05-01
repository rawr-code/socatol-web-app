import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Card, CardActions, Button, withStyles } from '@material-ui/core';
import classNames from 'classnames';

// Molecules
import FormHeader from '../../../components/Molecules/FormHeader';

import styles from './styles';

const FormMaterial = props => {
  const { classes, title, subtitle, children, onSubmit, actions } = props;
  const { sm, md } = props;
  return (
    <form
      className={classNames(classes.root, sm && classes.sm, md && classes.md)}
      autoComplete="off"
      onSubmit={onSubmit}>
      <FormHeader title={title} subtitle={subtitle} />
      <Card className={classes.content}>
        {children}
        <CardActions>
          {actions ? (
            actions
          ) : (
            <>
              <Button color="primary">Cancelar</Button>
              <Button
                color="primary"
                variant="contained"
                // disabled={validate()}
                type="submit">
                Guardar
              </Button>
            </>
          )}
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
