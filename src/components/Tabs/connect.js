import { connect } from "react-redux";
import Component from "./Tabs";
import { selectTab } from "../../store/reducers/tabs/tabsActions";

const mapDispatchToProps = {
  selectTab
};

const mapStateToProps = (state) => ({
  selectedId: state.tabs
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
