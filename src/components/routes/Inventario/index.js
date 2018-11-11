import Inventario from "./Inventario";
import { connect } from "react-redux";

// Actions Creators
import { handleChangeTab } from "../../../ducks/Inventario";

const mapStateToProps = ({ Inventario: { selectedTabIndex } }) => {
  return { selectedTabIndex };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeTab(event, index) {
      dispatch(handleChangeTab(index));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventario);
