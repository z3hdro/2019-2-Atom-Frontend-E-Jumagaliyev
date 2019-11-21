import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';


export default function PhotoAttachment({attachment}) {
	const fileInput = React.createRef();

	const fileSelectedHandler = (event) => {
		const file = event.target.files[0];
		attachment({status: true, data: window.URL.createObjectURL(file), upload: file});
	};

    
	function HandleClick() {
		fileInput.current.click();
	}


	return (
		<div className={styles.add_button}>
			<input
				className={styles.photoAttach}
				type='file'
				accept='image/*'
				onChange={fileSelectedHandler}
				ref={fileInput}/>
			<div 
				className = {styles.picAttach}
				role = 'button'
				onClick={HandleClick}
				onKeyPress={() => {}}
				tabIndex = '0'>
				<img alt='upload attachmets' 
					src='http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911594add.png'/>
			</div>
		</div>
	);
};

PhotoAttachment.propTypes = {
	attachment : PropTypes.func.isRequired,
};