import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Cover from '../containers/main/Main';
import List from '../containers/list/List';

function RootNavigator({history}: any) {

	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Cover} />
				<Route path="/list" component={List} />
			</Switch>
		</ConnectedRouter>
	)
}

export default RootNavigator;