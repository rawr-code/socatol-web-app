import React from "react";

// Feather Icons
import { Package, DollarSign, FileText, Printer, Grid } from "react-feather";

// Components
import Inventario from "../../containers/InventoryManagement/WarehouseContainer";

const appRoutes = [
  {
    name: "Inicio",
    path: "/",
    exact: true,
    icon: <Grid />,
    component: <p>Soy Inicio!</p>
  },
  {
    name: "Banco",
    path: "/banco",
    icon: <DollarSign />,
    component: <p>Soy Banco!</p>
  },
  {
    name: "Facturar",
    path: "/facturar",
    icon: <FileText />,
    component: <p>Soy Facturar!</p>
  },
  {
    name: "Inventario",
    path: "/inventario",
    icon: <Package />,
    component: Inventario
  },
  {
    name: "Reportes",
    path: "/reportes",
    icon: <Printer />,
    component: <p>Soy Reportes!</p>
  }
];

export default appRoutes;
