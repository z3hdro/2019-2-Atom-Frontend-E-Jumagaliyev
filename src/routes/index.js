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

function Support() {
	return (
		<div>
			<h1>Жалобы и баги</h1>
			<p>https://docs.google.com/document/d/1dcKpg02_kF_0wPfab8PfZArli03CLiQDusRqFfj5wks/edit</p>
			<p> переходить по данной ссылке и отставлять жалобы)</p>

		</div>
	);
}

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
				<Route path='/message/:id'>
					<Child />
				</Route>
				<Route path='/support'>
					<Support />
				</Route>
				<Route path='/'>
					<ChatList />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
