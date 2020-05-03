import {connect} from 'react-redux';
import {Main} from "../../components";
import {MainProps, State} from "../../interfaces/appInterfaces";

const mapStateToProps = (state: State): MainProps => ({
  mainData: state.main.mainData,
  isLogged: state.login.isLogged
});

export default connect(
  mapStateToProps,
  null
)(Main);