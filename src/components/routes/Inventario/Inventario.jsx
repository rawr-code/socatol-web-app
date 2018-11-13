import React, { Fragment } from "react";

// React Router
import { Link, Route, Switch, Redirect } from "react-router-dom";

// Routes
import { Home, Create } from "./routes";

const Inventario = ({ selectedTabIndex, handleChangeTab, match, routes }) => {
  return (
    <Fragment>
      {/* <Link to={`${match.path}/prueba`}>prueba</Link> */}
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
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/almacen/nuevo`}
          render={({ history }) => (
            <Create
              history={history}
              arrowBack
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
