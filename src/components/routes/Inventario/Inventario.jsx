import React, { Fragment } from "react";

// React Router
import { Link, Route, Switch, Redirect } from "react-router-dom";

// Routes
import { Home, Create } from "./routes";

const Inventario = ({
  selectedTabIndex,
  handleChangeTab,
  newAlmacen,
  almacenes,
  match,
  routes
}) => {
  return (
    <Fragment>
      <Switch>
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
      </Switch>
    </Fragment>
  );
};

export default Inventario;
