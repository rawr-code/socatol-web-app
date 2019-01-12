import React, { Fragment } from "react";

import { BlockHeader } from "../../molecules";

// MaterialUI Components
import { Typography } from "@material-ui/core";

const BlockInfo = props => {
  const { data } = props;
  // const { title, description, warehouse } = data;
  return (
    <Fragment>
      <BlockHeader title={data.title} />
      <div>
        <Typography>Descripción</Typography>
        <Typography>{data.description}</Typography>
        <Typography>Almacen</Typography>
        <Typography>{data.warehouse}</Typography>
      </div>
    </Fragment>
  );
};

export default BlockInfo;
