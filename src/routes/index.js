import React, {useState} from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import CounterContainer from '../containers/CounterContainer'
import Message from '../components/Message'
import ChatList from '../components/ChatList'

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
	const [component, setComponent] = useState(
		<ChatList route={(name) => openChat(name)} />,
	);
	
	const openChat = (name) => {
		setComponent(<Message route={() => closeChat()} name={name} />);
	};
	
	const closeChat = () => {
		setComponent(<ChatList route={(name) => openChat(name)} />);
	};
	return (
		<Router history={history}>
			<Container>
				<Switch>
					{component}
					{/* <Route path="/" component={CounterContainer} /> */}
				</Switch>
			</Container>
		</Router>
	)
}

export default Routes
