import React, { Fragment } from "react";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import InfoHeader from "../../../components/molecules/InfoHeader";

// MaterialUI Components
import { Grid } from "@material-ui/core";
// Routes
import { Home, Create } from "./routes";

const Inventario = ({ selectedTabIndex, handleChangeTab, almacenes }) => {
  return (
    <Fragment>
      <InfoHeader
        title="Gestion de Inventario"
        description="Listado de almacenes, productos y proveedores."
      />
      <article style={{ margin: "24px 24px 0" }}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Home
              title="Inventario"
              addButtonTitle="Añadir almacén"
              buttonUrl="/almacen/nuevo"
              selectedTabIndex={selectedTabIndex}
              handleChangeTab={handleChangeTab}
              almacenes={almacenes}
            />
            <Home
              title="Inventario"
              addButtonTitle="Añadir almacén"
              buttonUrl="/almacen/nuevo"
              selectedTabIndex={selectedTabIndex}
              handleChangeTab={handleChangeTab}
              almacenes={almacenes}
            />
          </Grid>
          <Grid item xs={4}>
            <Home
              title="Inventario"
              addButtonTitle="Añadir almacén"
              buttonUrl="/almacen/nuevo"
              selectedTabIndex={selectedTabIndex}
              handleChangeTab={handleChangeTab}
              almacenes={almacenes}
            />
          </Grid>
        </Grid>

        {/* <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => (
              <Home
                title="Inventario"
                addButtonTitle="Añadir almacén"
                buttonUrl={`${match.path}/almacen/nuevo`}
                selectedTabIndex={selectedTabIndex}
                handleChangeTab={handleChangeTab}
                almacenes={almacenes}
              />
            )}
          />
          <Route
            exact
            path={`${match.path}/almacen/nuevo`}
            render={({ history }) => (
              <Create
                arrowBack
                history={history}
                handleCreate={newAlmacen}
                title="Nuevo Almacén"
                formTitle="Almacén"
              />
            )}
          />
          <Redirect to={`${match.url}`} />
        </Switch> */}
      </article>
    </Fragment>
  );
};

export default Inventario;
