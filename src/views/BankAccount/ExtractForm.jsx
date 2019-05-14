import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import { useDropzone } from 'react-dropzone';

import Formsy from 'formsy-react';

// Material UI
import {
  Icon,
  Typography,
  Grid,
  CardActions,
  Button,
  MenuItem
} from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

import { Info } from '@material-ui/icons';

const Dropzone = props => {
  const { handleChange } = props;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path} style={{ listStyle: 'none' }}>
      <Typography variant="body1">
        Nombre: <b>{file.path}</b> - Tamaño: <b>{file.size}</b> bytes
      </Typography>
    </li>
  ));

  return (
    <section>
      <div
        {...getRootProps()}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          borderWidth: 2,
          borderRadius: 2,
          borderColor: '#eeeeee',
          borderStyle: 'dashed',
          backgroundColor: '#fafafa',
          color: '#bdbdbd',
          outline: 'none',
          transition: 'border .24s ease-in-out',
          marginBottom: 24
        }}>
        <input {...getInputProps({ onChange: handleChange })} />
        <Typography variant="body2">
          Arrastre y suelte algunos archivos aquí, o haga clic para seleccionar
          archivos
        </Typography>
      </div>
      {files.length > 0 && (
        <div style={{ padding: 24 }}>
          <Typography variant="h6">Archivos</Typography>
          <ul style={{ padding: 0 }}>{files}</ul>
        </div>
      )}
    </section>
  );
};

const ExtractForm = props => {
  let [isValid, setIsValid] = useState(false);
  let [typeAmount, setTypeAmount] = useState('');
  let [files, setFiles] = useState([]);

  const disableButton = () => {
    setIsValid(false);
  };

  const enableButton = () => {
    setIsValid(true);
  };

  const handleSubmit = mutate => async model => {
    console.log(model);
    const {
      date,
      ref,
      concept,
      typeAmount,
      amount,
      debit,
      credit,
      balance
    } = model.config;

    let config = {
      date: Number(date),
      ref: Number(ref),
      concept: Number(concept),
      balance: Number(balance),
      typeAmount
    };

    if (typeAmount === 'unique') {
      config.amount = Number(amount);
    } else {
      config.debit = Number(debit);
      config.credit = Number(credit);
    }

    const input = {
      id: props.id,
      files,
      config
    };

    console.log(input);
    const result = await mutate({ variables: { input } });
    console.log(result);
    props.handleClose();
  };

  const handleAddFiles = e => {
    const newFiles = Object.values(e.target.files);
    setFiles(newFiles);
  };

  const handleChange = value => {
    const type = value['config.typeAmount'];
    if (typeAmount !== type) {
      setTypeAmount(type);
    }

    return value;
  };

  const { mutation, handleClose } = props;

  return (
    <Mutation mutation={mutation}>
      {mutate => {
        return (
          <FormMaterial
            sm
            title={'Cargar Extracto Bancario'}
            subtitle="Información del archivo">
            <Dropzone handleChange={handleAddFiles} />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16
              }}>
              <Icon color="disabled" style={{ marginRight: 8 }}>
                <Info />
              </Icon>
              <Typography variant="subtitle2" color="textSecondary">
                Debe indicar el número de la columna correspondiente dentro de
                los archivos
              </Typography>
            </div>
            <Formsy
              autoComplete="off"
              onValidSubmit={handleSubmit(mutate)}
              onValid={enableButton}
              onInvalid={disableButton}
              onChange={handleChange}>
              <Grid container spacing={8}>
                <Grid item xs={6} sm={3}>
                  <InputField
                    label="Fecha"
                    name="config.date"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <InputField
                    label="Referencia"
                    name="config.ref"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <InputField
                    label="Concepto"
                    name="config.concept"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <InputField
                    label="Saldo"
                    name="config.balance"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={6} sm={4}>
                  <InputField
                    label="Tipo de importe"
                    name="config.typeAmount"
                    select
                    fullWidth
                    onChange={e => console.log(e)}
                    required>
                    <MenuItem value="unique">Unico</MenuItem>
                    <MenuItem value="debit/credit">Debito/Credito</MenuItem>
                  </InputField>
                </Grid>
                {typeAmount && typeAmount === 'unique' && (
                  <Grid item xs={6} sm={4}>
                    <InputField
                      label="Importe"
                      name="config.amount"
                      fullWidth
                      required
                    />
                  </Grid>
                )}
                {typeAmount && typeAmount === 'debit/credit' && (
                  <>
                    <Grid item xs={6} sm={4}>
                      <InputField
                        label="Debito"
                        name="config.debit"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <InputField
                        label="Credito"
                        name="config.credit"
                        fullWidth
                        required
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              <CardActions>
                <Button color="primary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={!isValid}>
                  Guardar
                </Button>
              </CardActions>
            </Formsy>
          </FormMaterial>
        );
      }}
    </Mutation>
  );
};

export default ExtractForm;
