import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { ChevronRight } from 'react-feather';

const Crumbs = props => {
  const { classes } = props;
  const data = [
    {
      name: 'Inicio'
    },
    {
      name: 'Inventario'
    },
    {
      name: 'Productos'
    }
  ];
  return (
    <div className={classes.rootCrumbs}>
      {data.map((item, index) => (
        <Fragment key={item.name}>
          <Typography variant="body1" className={classes.crumb}>
            {item.name}
          </Typography>
          {index < data.length - 1 && (
            <ChevronRight size={16} className={classes.crumbArrow} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Crumbs;
