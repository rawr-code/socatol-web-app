import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  CardContent,
  Grid,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  MenuItem
} from '@material-ui/core';

// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Molecules
import { FormMaterial } from '../../components/Organisms';

import bankList from './bankList';

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

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const result = await onSubmit();
    console.log(result);
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

  render() {
    const { mutation, history, data } = this.props;
    return (
      <MainContainer>
        <Mutation
          mutation={mutation}
          variables={{ input: this.generateInput() }}
          onCompleted={() => history.push('/tesoreria')}>
          {onSubmit => {
            return (
              <FormMaterial
                validate={this.handleValidate}
                onSubmit={this.handleSubmit(onSubmit)}
                title={data ? 'Editar Cuenta' : 'Nueva Cuenta Bancaria'}
                subtitle="Información de la cuenta">
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
                        label={<FormHelperText>Activar cuenta</FormHelperText>}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </FormMaterial>
            );
          }}
        </Mutation>
      </MainContainer>
    );
  }
}

// connect to router
export default withRouter(BankAccountForm);
