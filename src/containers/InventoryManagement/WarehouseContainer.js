import { connect } from "react-redux";

// Components
import { Inventario } from "Routes";

// Actions Creators
import { GET_ALL } from "../../actions/InventoryManagement/WarehouseActions";

const mapStateToProps = ({ InventoryManagement }) => {
  return { InventoryManagement };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      warehouse: {
        GET_ALL: e => {
          dispatch(GET_ALL());
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventario);
