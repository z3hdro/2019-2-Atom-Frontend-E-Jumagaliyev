import React from 'react';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	useParams
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainForecast from './MainForecast';
import SelectedForecast from './SelectedForecast'


export const history = createBrowserHistory();

function Child() {
	const { id } = useParams();
	return (
		<SelectedForecast id = {id}/>
	);
}

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/'>
					<MainForecast />
				</Route>
				<Route path='/:id'>
					<Child />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;