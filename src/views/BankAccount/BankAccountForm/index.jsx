import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  MenuItem,
  withStyles
} from '@material-ui/core';

// Layout
import MainContainer from '../../../components/Layout/MainContainer';

// Atoms
import InputField from '../../../components/Atoms/InputField';

// Molecules
import FormHeader from '../../../components/Molecules/FormHeader';

import bankList from './banks';

import styles from './styles';

class BankAccountForm extends Component {
  state = {
    id: '',
    name: '',
    bank: '',
    type: '',
    number: '',
    active: true
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    mutation: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { data } = this.props;
    if (data) {
      this.setState({ ...data });
    }
  }

  handleChange = e => {
    const { type, name, value, checked } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result });
  };

  handleValidate = () => {
    const { name, bank, type, number } = this.state;
    const isValid = !name || !bank || !type || !number;

    return isValid;
  };

  generateInput = () => {
    const input = {
      id: this.state.id,
      name: this.state.name,
      bank: this.state.bank,
      type: this.state.type,
      number: this.state.number,
      active: this.state.active
    };

    return input;
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const result = await onSubmit();
    console.log(result);
  };

  updateState = data => {
    this.setState({ ...data });
  };

  render() {
    const { classes, mutation, history, data } = this.props;
    return (
      <MainContainer>
        <Mutation
          mutation={mutation}
          variables={{ input: this.generateInput() }}
          onCompleted={() => history.push('/tesoreria')}>
          {onSubmit => {
            return (
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={this.handleSubmit(onSubmit)}>
                <FormHeader
                  title={data ? 'Editar Cuenta' : 'Nueva Cuenta Bancaria'}
                  subtitle="Información de la cuenta"
                />
                <Card className={classes.content}>
                  <CardContent>
                    <Grid container spacing={8}>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Nombre"
                          name="name"
                          onChange={this.handleChange}
                          defaultValue={this.state.name}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Banco"
                          name="bank"
                          onChange={this.handleChange}
                          value={this.state.bank}
                          fullWidth
                          dense
                          select>
                          {bankList.map(bank => (
                            <MenuItem value={bank.name} key={bank.name}>
                              {bank.name}
                            </MenuItem>
                          ))}
                        </InputField>
                      </Grid>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Tipo de cuenta"
                          name="type"
                          onChange={this.handleChange}
                          value={this.state.type}
                          fullWidth
                          dense
                          select>
                          <MenuItem value="CURRENT">Corriente</MenuItem>
                          <MenuItem value="SAVING">Ahorro</MenuItem>
                        </InputField>
                      </Grid>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Número de cuenta"
                          name="number"
                          onChange={this.handleChange}
                          defaultValue={this.state.number}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.active}
                              onChange={this.handleChange}
                              value={'active'}
                              name="active"
                              color="primary"
                            />
                          }
                          label={
                            <FormHelperText>Activar cuenta</FormHelperText>
                          }
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button color="primary">Cancelar</Button>
                    <Button
                      color="primary"
                      variant="contained"
                      disabled={this.handleValidate()}
                      type="submit">
                      Guardar
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        </Mutation>
      </MainContainer>
    );
  }
}

// Apply styles
const _BankAccountForm = withStyles(styles)(BankAccountForm);

// connect to router
export default withRouter(_BankAccountForm);
