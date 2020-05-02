import {connect} from "react-redux";
import {Subscriber} from "../../shared/Subscriber";

const mapDispatchToProps = () => ({
  subscribe: () => {},
  unsubscribe: () => {}
});

export const LoginProvider = connect(null, mapDispatchToProps)(Subscriber);
