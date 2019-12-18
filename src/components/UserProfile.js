import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/userprofile.module.css';
import { API_URL } from './config';


export default function UserProfile() {
	const [data, setData] = useState({});
	const [imageURL, setImageURL] = useState();
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState(false);
    
	useEffect( () => {
		fetch(`${API_URL}/users/finduser/`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				console.log(json.result);
				setData(json.result);
			});
		return () => {
			
		};}, []);



	const sendDatatoServer = () => {
		const userData = new FormData();
		
		userData.append('first_name', data.first_name);
		userData.append('last_name', data.last_name);
		userData.append('bio', data.bio);
		userData.append('avatar', selectedFile);
		fetch(`${API_URL}/users/updateuser/`, {
			method: 'POST',
			headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`,
			},
			body: userData
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				console.log(json.success);
			});
		
	};

	

	const UserPageHeader = () => {
		return (
			<div className={styles.chat_header}>
				<div className={styles.backimg}
					role = 'button'
					onClick = {() => {}}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					<Link to='/chatlist/'>
						<img src='http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png' alt='back' />
					</Link>
				</div>
				<p className={styles.header_chat}>Edit Profile</p>
				<div className={styles.saveBtn}
					role = 'button'
					onClick = {() => {
						sendDatatoServer();
					}
					}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					<img src='http://s1.iconbird.com/ico/2013/3/637/w128h128139396832132.png' alt='Save'/>
				</div>
			</div>
		);
	};
    
	function SaveData(...input) {
		if (input[1].key === 'Enter') {
			const flag = input[0];
			const info = input[2];
			if (info !== '') {
				if (flag === 1){
					setData({
						...data,
						fullname: info
					});
				}
				if (flag === 2){
					setData({
						...data,
						username: info
					});
				}
				if (flag === 3){
					setData({
						...data,
						biography: info
					});
				}
			}
			
		}
	};

	function UserPage() {
		const [firstNameInfo, setFirstNameInfo] = useState(data.first_name);
		const [lastNameInfo, setLastNameInfo] = useState(data.last_name);
		const [BioInfo, setBioInfo] = useState(data.bio);
		const fileInput = React.createRef();

		const fileSelectedHandler = (files) => {
			const file = files[0];
			setSelectedFile(file); 
			const fileURL = window.URL.createObjectURL(file);
			setImageURL(fileURL);
			setPreview(true);
		};

		function HandleClick() {
			fileInput.current.click();
		}


		return (
			<div className={styles.userpage}>
				<div className={styles.avatar}>
					<input
						className={styles.photoAttach}
						type='file'
						accept='image/jpeg,image/png'
						onChange={(event) => fileSelectedHandler(event.target.files)}
						ref={fileInput}/>
					<div className={styles.avatarPic}
						role = 'button'
						onClick = {HandleClick}
						onKeyPress = {() => {}}
						tabIndex = '0'>
						<img alt='User' src={ preview ? 
							imageURL :
							data.avatar
						}
						style={{width: '10vh', height: '10vh', borderRadius: '50%'}}/>
					</div>
				</div>
				<div className={styles.fullname}>
					<p className={styles.textholdernames}>First name</p>
					<textarea className={styles.textholder}
						rows = '1' 
						maxLength = '25'
						value = {firstNameInfo}
						onChange = {(event) => setFirstNameInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(1, event, firstNameInfo.trim())}
						onBlur = {()=> {
							setData({
								...data,
								first_name: firstNameInfo.trim()
							});
						}}/>
				</div>
				<div className={styles.username}>
					<p className={styles.textholdernames}>Last Name</p>
					<textarea className={styles.textholder}
						rows = '1'
						minLength = '5'
						maxLength = '20'
						value = {lastNameInfo}
						onChange = {(event) => setLastNameInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(2, event, lastNameInfo.trim())}
						onBlur = {() => {
							setData({
								...data,
								last_name: lastNameInfo.trim()
							});
						}}/>
				</div>
				<div className={styles.biography}>
					<p className={styles.textholdernames}>Biography</p>
					<textarea className={styles.textholder}
						rows = '4'
						maxLength = '150'
						value = {BioInfo}
						onChange = {(event) => setBioInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(3, event, BioInfo.trim())}
						onBlur = {() => {
							setData({
								...data,
								bio: BioInfo.trim()
							});
						}}/>
				</div>
			</div>
		);
	};

	return (
		<div className = {styles.container}>
			<UserPageHeader/>
			<UserPage/>
		</div>
	);
}
