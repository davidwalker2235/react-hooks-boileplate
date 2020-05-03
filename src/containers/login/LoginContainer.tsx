import {connect} from 'react-redux';
import {Login} from "../../components";
import {login} from '../../actions/loginActions'
import {LoginProps, LoginState, State} from "../../interfaces/appInterfaces";

const mapStateToProps = (state: State): LoginState => ({
  isLogged: state.login.isLogged
});

const mapDispatchToProps = (): LoginProps => ({
  login,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);