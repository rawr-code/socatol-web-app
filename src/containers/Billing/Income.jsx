import React, { Component } from 'react';
import { theme } from '../../MUICustomTheme';
// Material UI
import { Grid, Paper, Typography, MuiThemeProvider } from '@material-ui/core';

// Components
import DataTable from '../../components/DataTable';

class IncomeContainer extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper style={{ padding: 24 }}>
            {/* <Typography variant="h6" component="h2">
              Estado
            </Typography> */}
            <Grid container spacing={0}>
              <Grid item xs={6}>
                Grafica
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Cobrado
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    82 %2.329,00 €
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Pendiente
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    18 %500,00 €
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Vencido
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    0 %0,00 €
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: 24 }}>
            {/* <Typography variant="h6" component="h2">
              Estado
            </Typography> */}
            <Grid container spacing={0}>
              <Grid item xs={6}>
                Grafica
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Cobrado
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    82 %2.329,00 €
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Pendiente
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    18 %500,00 €
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 'bold' }}
                    component="h2">
                    Vencido
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    0 %0,00 €
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <MuiThemeProvider theme={theme}>
            <DataTable />
          </MuiThemeProvider>
        </Grid>
      </Grid>
    );
  }
}

export default IncomeContainer;
