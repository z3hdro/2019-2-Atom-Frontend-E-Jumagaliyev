import React, {useEffect} from 'react';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useParams
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import Message from '../components/Message';
import GroupMessage from '../components/GroupChat';
import ChatList from '../components/ChatList';
import UserProfile from '../components/UserProfile';
import * as actions from '../actions/auth';

export const history = createBrowserHistory();

function Support() {
	return (
		<div>
			<h1><a href='https://docs.google.com/document/d/1dcKpg02_kF_0wPfab8PfZArli03CLiQDusRqFfj5wks/edit'>Жалобы и баги</a></h1>
			<p> переходить по данной ссылке и отставлять жалобы)</p>

		</div>
	);
}
function ChildGroup() {
	const { id } = useParams();
	return (
		<GroupMessage id = {id.slice(1)}/>
	);
}

function Child() {
	const { id } = useParams();
	return (
		<Message id = {id.slice(1)}/>
	);
}

function Routes({isAuthenticated, onTryAutoSignUp}) {
	useEffect(() => onTryAutoSignUp()
		, [onTryAutoSignUp]);

	const toggle = localStorage.getItem('token');
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/'>
					{(toggle !== null) ? <Redirect exact from = '/' to='/chatlist/' /> : <Redirect exact from = '/' to='/login/' />}
				</Route>
				<Route exact path='/login/'>
					{(toggle !== null) ? <Redirect exact from = '/login/' to='/chatlist/' /> : null }
					<LoginPage isAuthenticated = {isAuthenticated} />
				</Route>
				<Route exact path='/signup/'>
					{(toggle !== null) ? <Redirect exact from = '/signup/' to='/chatlist/' /> : null }
					<SignUpPage isAuthenticated = {isAuthenticated}/>
				</Route>
				<Route exact path='/profile/'>
					{(toggle !== null) ? null : <Redirect exact from = '/' to='/login/' />}
					<UserProfile />
				</Route>
				<Route exact path='/message/:id/'>
					{(toggle !== null) ? null : <Redirect exact from = '/' to='/login/' />}
					<Child />
				</Route>
				<Route exact path='/groupmessage/:id/'>
					{(toggle !== null) ? null : <Redirect exact from = '/' to='/login/' />}
					<ChildGroup />
				</Route>
				<Route exact path='/support/'>
					{(toggle !== null) ? null : <Redirect exact from = '/' to='/login/' />}
					<Support />
				</Route>
				<Route exact path='/chatlist/'>
					{(toggle !== null) ? null : <Redirect exact from = '/' to='/login/' />}
					<ChatList />
				</Route>
			</Switch>
		</Router>
	);
}

Routes.propTypes = {
	isAuthenticated : PropTypes.bool.isRequired,
	onTryAutoSignUp : PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignUp: () => dispatch(actions.authCheckState())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
