import React, { Fragment } from "react";

// Components
import { TabsHeader, DataTable } from "../../molecules";

const Inventario = ({ selectedTabIndex, handleChangeTab }) => {
  return (
    <Fragment>
      <TabsHeader
        tabs
        title="Inventario"
        selectedIndex={selectedTabIndex}
        handleChange={handleChangeTab}
      />
      {selectedTabIndex === 0 && <DataTable />}
      {selectedTabIndex === 1 && <h1>Soy Productos</h1>}
      {selectedTabIndex === 2 && <h1>Soy Proveedores</h1>}
    </Fragment>
  );
};

export default Inventario;
