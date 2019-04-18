import React from 'react';

// Material UI
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  MenuItem,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  withStyles
} from '@material-ui/core';

// Layout
import MainContainer from '../../../components/Layout/MainContainer';

// Atoms
import InputField from '../../../components/Atoms/InputField';

// Molecules
import FormHeader from '../../../components/Molecules/FormHeader';

import styles from './styles';

const NewProduct = props => {
  const { classes } = props;
  return (
    <MainContainer>
      <form className={classes.root}>
        <FormHeader
          title="Agregar producto"
          subtitle="Información del producto"
        />
        <Card className={classes.content}>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  label="Nombre*"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item xs={8}>
                <InputField
                  variant="outlined"
                  label="Precio*"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  variant="outlined"
                  label="Cantidad*"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item xs={12}>
                <InputField variant="outlined" label="IVA*" fullWidth dense />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  label="Descripción*"
                  multiline
                  rows="4"
                  rowsMax="4"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant="outlined"
                  label="Almacén*"
                  select
                  value={''}
                  fullWidth
                  dense>
                  <MenuItem value="1">Almacen 1</MenuItem>
                </InputField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      // onChange={this.handleChange('checkedA')}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label={<FormHelperText>Activar producto</FormHelperText>}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="primary">Cancelar</Button>
            <Button color="primary" variant="contained">
              Registrar
            </Button>
          </CardActions>
        </Card>
      </form>
    </MainContainer>
  );
};

// Apply styles

const _NewProduct = withStyles(styles)(NewProduct);

export default _NewProduct;
