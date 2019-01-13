import Inventario from "./Inventario";

import { connect } from "react-redux";

// Actions Creators
import { newAlmancen } from "../../../ducks/Inventario";

const mapStateToProps = ({ Inventario: { selectedTabIndex, almacenes } }) => {
  return { selectedTabIndex, almacenes };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeTab(event, index) {
      dispatch(handleChangeTab(index));
    },
    newAlmacen: data => {
      dispatch(newAlmancen(data));
    }
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Inventario);

export default Inventario;
