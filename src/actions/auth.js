import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = token => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error
	};
};

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const authLogin = (username, password) => {
	return dispatch => {
		dispatch(authStart());
		
		const data = {
			'username': username,
			'password': password
		};

		fetch('http://localhost:8000/rest-auth/login/', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		})
			.then(res => {
				if (!res.ok) throw res;
				return res.json();})
			.catch(err => {
				dispatch(authFail(err));
			})
			.then(json => {
				const token = json.key;
				// expiration time for 1 hour
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
				localStorage.setItem('token', token);
				localStorage.setItem('expirationDate', expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch(err => {
				dispatch(authFail(err));
			});
	};
};


export const authSignup = (username, email, password1, password2) => {
	return dispatch => {
		dispatch(authStart());
		// axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
		//     username: username,
		//     email: email,
		//     password1: password1,
		//     password2: password2,
		// })
		// .then(res => {
		//     const token = res.data.key;
		//     //expiration time for 1 hour
		//     const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
		//     localStorage.setItem('token', token);
		//     localStorage.setItem('expirationDate', expirationDate);
		//     dispatch(authSuccess(token));
		//     checkAuthTimeout();
		// })
		// .catch(err => {
		//     dispatch(authFail(err))
		// })
		const data = {
			'username':username,
			'email':email,
			'password1':password1,
			'password2':password2,
		};

		fetch('http://localhost:8000/rest-auth/registration/', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		})
		// .then(result => console.log(result));
			.then(res => {
				if (!res.ok) throw res;
				return res.json();})
			.then(json => {
				const token = json.key;
				// expiration time for 1 hour
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
				localStorage.setItem('token', token);
				localStorage.setItem('expirationDate', expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch(err => {
				dispatch(authFail(err));
			});
	};
};

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (token === undefined) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if ( expirationDate <= new Date() ) {
				dispatch(logout());
			} else {
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime())/ 1000 ));

			}
		}
	};
};