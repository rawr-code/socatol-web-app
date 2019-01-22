import { connect } from 'react-redux';

// Components
import { Inventario } from '../../components/routes';

// Actions Creators
import { GET_ALL } from '../../actions/InventoryManagement/WarehouseActions';

const mapStateToProps = ({ InventoryManagement }) => ({ InventoryManagement });

const mapDispatchToProps = dispatch => ({
  actions: {
    warehouse: {
      GET_ALL: () => {
        dispatch(GET_ALL());
      }
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventario);
