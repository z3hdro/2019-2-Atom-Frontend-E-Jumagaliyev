import React, {useState} from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Message from '../components/Message';
import ChatList from '../components/ChatList';

const Container = styled.div`
	text-align: center;
`;
export const history = createBrowserHistory();

function Routes() {
	const[chat, setChat] = useState(<ChatList route={(name) => openChat(name)} />);

	function openChat(name) {
		setChat(<Message route={() => closeChat(name)} name={name} />);
	}

	function closeChat() {
		setChat(<ChatList route={(name) => openChat(name)} />);
	}

	return (
		<Router history={history}>
			<Container>
				<Switch>
					{chat}
					{/* <Route path="/" component={CounterContainer} /> */}
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
