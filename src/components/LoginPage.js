/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/auth';
import styles from '../styles/loginpage.module.css';



function LoginPage({ onAuth}) {
	const [values, setValues] = useState({username: '',password: ''});
    
	const sendData = event => {
		event.preventDefault();
		onAuth(values.username, values.password);
		setValues({username: '',password: ''});
	};

	return (
		<div className={styles.loginPageContainer}>
			<form method='post'>
				<div className={styles.container}>
					<label htmlFor='uname'><b>Username</b></label>
					<input 
						type='text' 
						placeholder='Enter Username'
						value = {values.username}
						onChange={(event) => setValues({
							...values,
							username: event.target.value})}
						name='uname' 
						required/>

					<label htmlFor='psw'><b>Password</b></label>
					<input 
						type='password' 
						placeholder='Enter Password'
						value = {values.password}
						onChange={(event) => setValues({
							...values,
							password: event.target.value
						})
						}
						name='psw' 
						required/>
                        
					<span className={styles.Login}
						role = 'button'
						onClick = {(event) => sendData(event)}
						onKeyPress = {() => {}}
						tabIndex = '0'>
                            Login
					</span>
                    Or
					<span className={styles.signUp}>
						<Link className={styles.links} to='/signup/'>SignUp</Link>
					</span>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (username, password) => dispatch(actions.authLogin(username, password))
	};
};

export default connect(null, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
	onAuth : PropTypes.func.isRequired 
};