import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function InitPage({isAuthenticated}) {
	return (
		<div>
			{
				isAuthenticated ?
				
					<div>
                        LogOut
					</div>
                     
					:
					<div>
						<Link to='/login/'>Login</Link>
					</div>
			}
		</div>
	);
}

InitPage.propTypes = {
	isAuthenticated : PropTypes.bool.isRequired
};