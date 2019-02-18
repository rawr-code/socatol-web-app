import React, { Component } from 'react';
import { theme } from '../../MUICustomTheme';

// Material UI
import { Grid, Paper, Typography, MuiThemeProvider } from '@material-ui/core';

// Charts 2
import { Doughnut, Bar, Pie } from 'react-chartjs-2';

// Components
import DataTable from '../../components/DataTable';

class IncomeContainer extends Component {
  render() {
    const data = {
      labels: ['Cobrado', 'Pendiente', 'Vencido'],
      datasets: [
        {
          data: [82, 18, 0],
          backgroundColor: ['#1890ff', '#FFC107', '#F44336'],
          hoverBackgroundColor: ['#1890ff', '#FFC107', '#F44336']
        }
      ]
    };
    const dataBar = {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
      datasets: [
        {
          label: 'Pendiente',
          backgroundColor: '#FFC107',
          borderColor: '#FFC107',
          borderWidth: 1,
          hoverBackgroundColor: '#ffd454',
          hoverBorderColor: '#FFC107',
          data: [65, 59, 80, 81, 56, 55, 40, 8, 45, 25, 50, 87]
        },
        {
          label: 'Cobrado',
          backgroundColor: '#1890ff',
          borderColor: '#00901b',
          borderWidth: 1,
          hoverBackgroundColor: '#69f67b',
          hoverBorderColor: '#00901b',
          data: [
            65 / 2,
            59 / 2,
            80 / 2,
            81 / 2,
            56 / 3,
            55 / 7,
            40 / 2,
            8 / 2,
            45 / 3,
            25 / 4,
            50 / 6,
            87 / 5
          ]
        }
      ]
    };
    return (
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <Paper style={{ padding: 24, height: '100%', paddingTop: 32 }}>
            {/* <Typography variant="h6" component="h2">
              Estado
            </Typography> */}
            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={6}>
                <Doughnut
                  data={data}
                  legend={{
                    display: false
                  }}
                  width={150}
                  height={170}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </Grid>
              <Grid item xs={6} style={{ paddingLeft: 24 }}>
                <div style={{ marginBottom: 8 }}>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 500, color: '#1890ff' }}
                    component="h2">
                    Cobrado
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    82% 2.329,00 €
                  </Typography>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 500, color: '#FFC107' }}
                    component="h2">
                    Pendiente
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    18% 500,00 €
                  </Typography>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <Typography
                    variant="body2"
                    style={{ fontWeight: 500, color: '#F44336' }}
                    component="h2">
                    Vencido
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    0% 0,00 €
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper style={{ padding: 24, paddingBottom: 0 }}>
            {/* <Typography variant="h6" component="h2">
              Estado
            </Typography> */}
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Bar
                  data={dataBar}
                  width={210}
                  height={210}
                  options={{ maintainAspectRatio: false }}
                  legend={{ display: false }}
                />
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
