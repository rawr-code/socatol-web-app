import React, { Fragment } from "react";

import { BlockHeader } from "../../molecules";
import { BlockItemsList, BlockInfo } from "../../organisms";

// MaterialUI Components
import { Grid } from "@material-ui/core";

const Inventario = ({ selectedTabIndex, handleChangeTab, almacenes }) => {
  const details = {
    title: "Veneno 3 en 1",
    description:
      "esta hecho para matar gente así no mas si te caen mal pos pum!",
    warehouse: "Biologicos"
  };
  const data = [
    {
      title: "producto1",
      description: "descripcion del producto"
    },
    {
      title: "producto2",
      description: "descripcion del producto"
    },
    {
      title: "producto3",
      description: "descripcion del producto"
    },
    {
      title: "producto4",
      description: "descripcion del producto"
    },
    {
      title: "producto5",
      description: "descripcion del producto"
    },
    {
      title: "producto6",
      description: "descripcion del producto"
    },
    {
      title: "producto7",
      description: "descripcion del producto"
    },
    {
      title: "producto8",
      description: "descripcion del producto"
    },
    {
      title: "producto9",
      description: "descripcion del producto"
    },
    {
      title: "producto10",
      description: "descripcion del producto"
    },
    {
      title: "producto11",
      description: "descripcion del producto"
    },
    {
      title: "producto12",
      description: "descripcion del producto"
    },
    {
      title: "producto13",
      description: "descripcion del producto"
    },
    {
      title: "producto14",
      description: "descripcion del producto"
    },
    {
      title: "producto15",
      description: "descripcion del producto"
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={4} component="section">
          <BlockHeader title="Productos" />
          <BlockItemsList
            data={data}
            // img="https://img.icons8.com/dusk/64/000000/product.png"
          />
        </Grid>
        <Grid item xs={8} component="section">
          <BlockInfo data={details} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Inventario;
