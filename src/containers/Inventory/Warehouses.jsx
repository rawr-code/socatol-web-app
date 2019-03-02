import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { GET_ALL, NEW } from '../../actions/Warehouse';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class Warehouses extends PureComponent {
  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
  };

  render() {
    const { data } = this.props;
    const { warehouses } = data.warehouse;
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      }
    ];
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/warehouse.png"
          title="Almacenes"
          subtitle="Listado de almacenes"
          button
          buttonLabel="Añadir Almacen"
        />
        <DataTable columns={columns} rows={warehouses ? warehouses : []} />
      </CardContainer>
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
