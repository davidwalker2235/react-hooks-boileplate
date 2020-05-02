import 'typeface-roboto';
import React, {FC} from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './router/rootRouter';
import configureStore, { history } from './store/store';
import {Loading, Modal} from './components';
import AppBarComponent from "./components/appBar/AppBarComponent";
import './App.css';

const App: FC<{}> = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Modal />
      <Loading />
      <AppBarComponent>
        <RootNavigator history={history}/>
      </AppBarComponent>
    </Provider>
  );
}

export default App;
