import { connect } from "react-redux";

// Components
import { Inventario } from "Routes";

// Actions Creators
// import { GET_ALL } from "../../../ducks/InventoryManagement/ducks/Actions/WarehouseActions";
import { GET_ALL } from "../../actions/InventoryManagement/WarehouseActions";

const mapStateToProps = ({ Inventory_Management }) => {
  return { Inventory_Management };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      warehouse: {
        GET_ALL: e => {
          console.log("Recibido");
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
