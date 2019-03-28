import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class Products extends Component {
  render() {
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
        name: 'stock',
        title: 'Stock'
      },
      {
        name: 'iva',
        title: 'IVA'
      },
      {
        name: 'price',
        title: 'Precio'
      }
    ];

    return <FullDataTable header={header} table={{ rows: [], columns }} />;
  }
}

export default Products;
