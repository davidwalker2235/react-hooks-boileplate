import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import {LoginView} from "./views/LoginView";
import {MainView} from "./views/MainView";

function RootNavigator({history}: any) {

	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={LoginView} />
				<Route path="/main" component={MainView} />
			</Switch>
		</ConnectedRouter>
	)
}

export default RootNavigator;