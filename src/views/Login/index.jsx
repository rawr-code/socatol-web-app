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
        <Typography variant="h5" className={classes.bigTitle}>
          SOCATOL
        </Typography>
        <p className={classes.smallTitle}>Sistema administrativo</p>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 8
          }}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nd/4.0/">
            <img
              alt="Licencia de Creative Commons"
              style={{ borderWidth: 0 }}
              src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png"
            />
          </a>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nd/4.0/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography
              style={{
                fontFamily: 'Google Sans',
                color: 'white',
                fontSize: 14,
                marginLeft: 8,
                marginRight: 8
              }}>
              Licencia de Creative Commons Reconocimiento-SinObraDerivada 4.0
              Internacional
            </Typography>
            <svg
              viewBox="64 64 896 896"
              data-icon="copyright"
              width="1em"
              height="1em"
              fill="white"
              aria-hidden="true">
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" />
            </svg>
            <Typography
              style={{
                fontFamily: 'Google Sans',
                color: 'white',
                fontSize: 14,
                marginLeft: 8
              }}>
              2019 - UPTP JJ Montilla.
            </Typography>
          </a>
        </div>
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
