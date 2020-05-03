import {connect} from 'react-redux';
import {Login} from "../../components";
import {login} from '../../actions/loginActions'
import {State} from "../../interfaces/appInterfaces";

const mapStateToProps = (state: State) => ({
  isLogged: state.login.isLogged
});

const mapDispatchToProps = () => ({
  login,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);