import React, { Component } from "react";

// Components
import CardContainer from "../../components/CardContainer";
import DataTableHeader from "../../components/DataTableHeader";
import DataTable from "../../components/DataTable";

class ExpensesContainer extends Component {
  render() {
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/purchase-order.png"
          title="Ventas"
          subtitle="Lista de facturas de venta"
          buttonLabel="Facturar Venta"
          button
        />
        <DataTable />
      </CardContainer>
    );
  }
}

export default ExpensesContainer;
