import {connect} from "react-redux";
import {Subscriber} from "../../shared/Subscriber";

const mapDispatchToProps = () => ({
  subscribe: () => {},
  unsubscribe: () => {}
});

export const MainProvider = connect(null, mapDispatchToProps)(Subscriber);
