import React, { Fragment } from "react";

// Components
import { TabsHeader, DataTable } from "../../../molecules";

const Home = props => {
  const {
    selectedTabIndex,
    handleChangeTab,
    buttonUrl,
    title,
    addButtonTitle
  } = props;
  return (
    <Fragment>
      <TabsHeader
        tabs
        title={title}
        selectedIndex={selectedTabIndex}
        handleChange={handleChangeTab}
      />
      {selectedTabIndex === 0 && (
        <DataTable buttonUrl={buttonUrl} addButtonTitle={addButtonTitle} />
      )}
      {selectedTabIndex === 1 && <h1>Soy Productos</h1>}
      {selectedTabIndex === 2 && <h1>Soy Proveedores</h1>}
    </Fragment>
  );
};

export default Home;
