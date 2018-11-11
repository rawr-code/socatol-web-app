import React from "react";

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
    exact: true,
    component: <p>Soy Banco!</p>
  },
  {
    name: "Facturar",
    path: "/facturar",
    exact: true,
    component: <p>Soy Facturar!</p>
  },
  {
    name: "Inventario",
    path: "/inventario",
    exact: true,
    component: <p>Soy Inventario!</p>
  },
  {
    name: "Reportes",
    path: "/reportes",
    exact: true,
    component: <p>Soy Reportes!</p>
  }
];

export default appRoutes;
