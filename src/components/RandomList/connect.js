import { connect } from "react-redux";
import Component from "./RandomList";
import {
  addItem,
  removeItem
} from "../../store/reducers/randomList/randomListActions";

const mapDispatchToProps = {
  onAdd: addItem,
  onRemove: removeItem
};

const mapStateToProps = (state) => ({
  items: state.randomList
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
