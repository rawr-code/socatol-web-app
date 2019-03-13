import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  Grid
} from '@material-ui/core';

// Actions
import { GET_ALL, NEW } from '../../actions/Warehouse';

// Components
import MainContainer from '../../components/MainContainer';
// import CardContainer from '../../components/CardContainer';
// import DataTableHeader from '../../components/DataTableHeader';
// import DataTable from '../../components/DataTable';

class Warehouses extends PureComponent {
  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
  };

  render() {
    const { data } = this.props;
    const { warehouses } = data.warehouse;
    console.log(warehouses);
    return (
      <MainContainer type="secondary">
        <header style={{ marginBottom: 16 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => console.log('hola')}>
            Añadir almacén
          </Button>
        </header>
        {warehouses.map(item => (
          <Grid container spacing={24} key={item._id}>
            <Grid item xs={4}>
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
          </Grid>
        ))}
      </MainContainer>
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
