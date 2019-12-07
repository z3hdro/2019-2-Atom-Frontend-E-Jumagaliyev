/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import styles from '../styles/loginpage.module.css';


function SignUpPage({history, onAuth}) {
	const [values, setValues] = useState({username: '', email: '', password1: '', password2: ''});
    
	const sendData = event => {
		event.preventDefault();
		console.log(values);
		onAuth(values.username, values.email, values.password1, values.password2);
		console.log(history);
		setValues({username: '', email: '', password1: '', password2: ''});
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

					<label htmlFor='uemail'><b>Email</b></label>
					<input 
						type='email' 
						placeholder='Enter email'
						value = {values.email}
						onChange={(event) => setValues({
							...values,
							email: event.target.value})}
						name='uemail' 
						required/>

					<label htmlFor='psw1'><b>Password</b></label>
					<input 
						type='password' 
						placeholder='Enter Password'
						value = {values.password1}
						onChange={(event) => setValues({
							...values,
							password1: event.target.value})}
						name='psw1' 
						required/>

					

					<label htmlFor='psw2'><b>Re-Password</b></label>
					<input 
						type='password' 
						placeholder='Repeat Password'
						value = {values.password2}
						onChange={(event) => setValues({
							...values,
							password2: event.target.value
						})
						}
						name='psw2' 
						required/>
                        
					<span className={styles.Login}
						role = 'button'
						onClick = {(event) => sendData(event)}
						onKeyPress = {() => {}}
						tabIndex = '0'>
                            SignUp
					</span>
                    Or
					<span className={styles.signUp}>
						<Link className={styles.links} to='/login/'>Login</Link>
					</span>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
	};
};

export default connect(null, mapDispatchToProps)(SignUpPage);