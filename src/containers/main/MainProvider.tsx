import {connect} from "react-redux";
import {Subscriber} from "../../shared/Subscriber";
import {getMainData} from '../../actions/mainActions';

const mapDispatchToProps = (dispatch: any) => ({
  subscribe: () => {
    dispatch(getMainData())
  },
  unsubscribe: () => {}
});

export const MainProvider = connect(null, mapDispatchToProps)(Subscriber);
