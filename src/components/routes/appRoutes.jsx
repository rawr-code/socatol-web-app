import React from "react";

// Components
import Inventario from "./Inventario";

const appRoutes = [
  {
    name: "Inicio",
    path: "/",
    exact: true,
    component: <p>Soy Inicio!</p>
  },
  {
    name: "Banco",
    path: "/banco",
    component: <p>Soy Banco!</p>
  },
  {
    name: "Facturar",
    path: "/facturar",
    component: <p>Soy Facturar!</p>
  },
  {
    name: "Inventario",
    path: "/inventario",
    component: Inventario
  },
  {
    name: "Reportes",
    path: "/reportes",
    component: <p>Soy Reportes!</p>
  }
];

export default appRoutes;
