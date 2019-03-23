import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import { Card, CardHeader, Button, Grid } from '@material-ui/core';

// Actions
import { GET_ALL, NEW } from '../../store/actions/Warehouse';

class Warehouses extends PureComponent {
  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
  };

  render() {
    const { data } = this.props;
    const { warehouses } = data.warehouse;
    return (
      <div style={{ margin: '0 auto', marginTop: 48, maxWidth: 1000 }}>
        <header style={{ marginBottom: 16 }}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="inventario/almacen/nuevo">
            Añadir almacén
          </Button>
        </header>
        <Grid container>
          {warehouses.map(item => (
            <Grid item xs={12} md={4} key={item._id}>
              <Card>
                <CardHeader
                  avatar={
                    <img
                      src="https://img.icons8.com/dusk/64/000000/warehouse.png"
                      alt="img"
                    />
                  }
                  title={item.name}
                  subheader="514 Productos"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ Inventory: { Warehouse: warehouse } }) => ({
  data: {
    warehouse
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: name => dispatch(reset(name)),
    getAll: () => dispatch(GET_ALL),
    new: payload => dispatch(NEW(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Warehouses);
