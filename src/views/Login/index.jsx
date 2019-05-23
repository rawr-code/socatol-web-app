import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import {
  Paper,
  Typography,
  // FormControlLabel,
  // Checkbox,
  // Link,
  Button,
  withStyles
} from '@material-ui/core';

import styles from './styles';

// Atoms
import { InputField } from '../../components/Atoms';

// Mutations
import { LOGIN_MUTATION } from '../../mutations/Authentication';

const LoginContainer = props => {
  const [isValid, setValid] = useState(false);

  const handleButton = value => () => {
    setValid(value);
  };

  const handleSubmit = mutate => async model => {
    const { data } = await mutate({ variables: { input: model } });
    const { userToken } = data;
    console.log(data);

    if (userToken) {
      const { token } = userToken;
      if (token !== null) {
        localStorage.setItem('token', token);
        await props.refetch({ token });
      }
    }
  };

  const { classes } = props;
  return (
    <main className={classes.root}>
      <section className={classes.textContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          perspiciatis in quidem. Vitae aperiam odit, sit laudantium fugiat vero
          ad hic nemo. A repellat, blanditiis tempora minima laudantium expedita
          libero.
        </p>
      </section>
      <section>
        <Paper className={classes.formRoot}>
          <Typography variant="h6" className={classes.formTitle}>
            INICIAR SESIÓN
          </Typography>
          <Mutation mutation={LOGIN_MUTATION}>
            {mutate => (
              <Formsy
                autoComplete="off"
                onValidSubmit={handleSubmit(mutate)}
                onValid={handleButton(true)}
                onInvalid={handleButton(false)}>
                <InputField
                  label="Usuario"
                  name="username"
                  placeholder="Nombre de usuario"
                  autoFocus
                  fullWidth
                  required
                />
                <InputField
                  label="Contraseña"
                  name="password"
                  placeholder="Contraseña"
                  fullWidth
                  required
                  isPassword
                />
                {/* <div className={classes.formOptions}>
                  <FormControlLabel
                    classes={{ root: classes.checkboxContainer }}
                    control={
                      <Checkbox
                        className={classes.checkbox}
                        checked={false}
                        // onChange={this.handleChange('checkedB')}
                        // value="checkedB"
                        color="primary"
                      />
                    }
                    label="Recordarme"
                  />
                  <Link href={'#'} variant="body1">
                    ¿Olvido su contraseña?
                  </Link>
                </div> */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className={classes.button}
                  disabled={!isValid}>
                  ENTRAR
                </Button>
              </Formsy>
            )}
          </Mutation>
        </Paper>
      </section>
    </main>
  );
};

export default withStyles(styles)(LoginContainer);
