import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { GET_ALL } from '../../store/actions/Product';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class Products extends Component {
  componentDidMount = () => {
    const { getProducts } = this.props.actions;
    getProducts();
  };

  render() {
    const { products } = this.props.state;
    console.log(products);
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/product.png',
      title: 'Productos',
      subtitle: 'Listado de productos',
      buttonLabel: 'Agregar Producto',
      buttonURL: 'inventario/producto/nuevo',
      button: true
    };
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      },
      {
        name: 'price',
        title: 'Precio'
      },
      {
        name: 'iva',
        title: 'IVA%'
      },
      {
        name: 'quantity',
        title: 'Disponible'
      }
    ];

    return (
      <FullDataTable header={header} table={{ rows: products, columns }} />
    );
  }
}

const mapStateToProps = ({
  Inventory: {
    Product: { products }
  }
}) => ({
  state: { products }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProducts: () => dispatch(GET_ALL)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
