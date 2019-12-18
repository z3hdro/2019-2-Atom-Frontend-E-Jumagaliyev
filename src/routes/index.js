import React from 'react';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	useParams
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Message from '../components/Message';
import ChatList from '../components/ChatList';
import UserProfile from '../components/UserProfile';

export const history = createBrowserHistory();

function Child() {
	const { id } = useParams();
	return (
		<Message name = {id.slice(1,id.length)}/>
	);
}

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/profile'>
					<UserProfile />
				</Route>
				<Route path='/message/:id' component={Child}>
					{/* <Child /> */}
				</Route>
				<Route path='/'>
					<ChatList />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
