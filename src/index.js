import React from 'react';
import { render } from 'react-dom';
// import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import store from './store';
import Routes from './routes';
import './styles/globalStyles.css';
import * as serviceWorker from './utils/serviceWorker';
import reducer from './reducers/auth';


// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const storeApp = createStore(reducer, composeEnhances(
// 	applyMiddleware(thunk)
// ));

render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
