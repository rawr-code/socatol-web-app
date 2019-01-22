import React, { Fragment, Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import XLSX from 'xlsx';

// MaterialUI Components
import { Button, Card, CardContent } from '@material-ui/core';

// Warehouse Forms
import { withStyles } from '@material-ui/core/styles';

import { BoardTabs } from 'Molecules';
import MiniCardBoard from 'Organisms';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Inventario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      data: [],
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    const { warehouse } = actions;
    warehouse.GET_ALL();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  cambio = data => {
    this.setState({ data });
  };

  render() {
    const { value, data } = this.state;
    const { InventoryManagement } = this.props;
    const { Warehouse } = InventoryManagement;

    const tabs = [
      {
        title: 'Almacenes',
      },
      {
        title: 'Productos',
      },
      {
        title: 'Proveedores',
      },
      {
        title: 'Movimientos',
      },
    ];
    return (
      <Fragment>
        <header>
          <BoardTabs
            data={tabs}
            value={value}
            handleChange={this.handleChange}
          />
        </header>

        <SwipeableViews
          axis="x"
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <MiniCardBoard
            avatar="home"
            data={Warehouse.warehouses}
            onClick={this.handleClickOpen}
          />
          <MiniCardBoard avatar="box" data={Warehouse.warehouses} />
          <MiniCardBoard avatar="user" data={Warehouse.warehouses} />
          <CardContent>
            <input
              style={{ display: 'none' }}
              accept=".xlsx,.csv"
              id="contained-button-file"
              multiple
              type="file"
              onChange={e => {
                const files = e.target.files;
                let i;
                let f;
                // Loop through files
                for (i = 0, f = files[i]; i != files.length; ++i) {
                  const name = f.name;
                  const reader = new FileReader();
                  reader.onload = e => {
                    /* Parse data */
                    const bstr = e.target.result;
                    const wb = XLSX.read(bstr, { type: 'binary' });
                    /* Get first worksheet */
                    const wsname = wb.SheetNames[0];
                    const ws = wb.Sheets[wsname];
                    /* Convert array of arrays */
                    const data1 = XLSX.utils.sheet_to_json(ws, { header: 1 });
                    /* Update state */
                    console.table(data1);
                    this.cambio(data1);
                  };
                  reader.readAsBinaryString(f);
                }
              }}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                onChange={() => console.log('button')}
              >
                Cargar Movimientos desde Excel
              </Button>
            </label>
            <div>
              {data &&
                data.length > 0 &&
                data.map(
                  (item, i) =>
                    i > 0 &&
                    typeof item[0] === 'string' && (
                      <Card
                        style={{
                          maxWidth: 500,
                          minWidth: 500,
                          margin: '0 auto',
                          marginBottom: 20,
                          position: 'relative',
                        }}
                      >
                        <CardContent>
                          <div
                            style={{
                              color: 'rgba(0, 0, 0, 0.54)',
                              fontSize: 14,
                            }}
                          >
                            {item[0]}
                          </div>
                          <div
                            style={{
                              color: 'rgba(0, 0, 0, 0.87)',
                              fontSize: 20,
                              fontFamily: 'Roboto',
                              fontWeight: 400,
                              lineHeight: 1.33,
                              letterSpacing: 0,
                              margin: '5px 0',
                            }}
                          >
                            {item[2]}
                          </div>
                          <div
                            style={{
                              color: 'rgba(0, 0, 0, 0.87)',
                              fontSize: '0.875rem',
                              fontFamily: 'Roboto',
                              fontWeight: 400,
                              lineHeight: 1.5,
                              letterSpacing: '0.01071em',
                            }}
                          >
                            {item[1]}
                          </div>
                          <div
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: 0,
                              padding: 50,
                              fontSize: 24,
                            }}
                          >
                            {item[3] > 0 ? (
                              <p style={{ color: 'red' }}>`-{item[3]} Bs.S`</p>
                            ) : (
                              <p style={{ color: 'green' }}>{item[4]} Bs.S</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                )}
            </div>
          </CardContent>
        </SwipeableViews>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Inventario);
