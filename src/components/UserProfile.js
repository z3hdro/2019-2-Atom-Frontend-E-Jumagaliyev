import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/userprofile.module.css';


export default function UserProfile() {
	const [data, setData] = useState({});
    
	useEffect(() => {
		if (localStorage.getItem('userinfo') !== null) {
			const userinfo = localStorage.getItem('userinfo');
			setData(JSON.parse(userinfo));
		}
		else{
			localStorage.setItem('userinfo', JSON.stringify({fullname: '', username: '', biography: ''}));
			setData({fullname: '', username: '', biography: ''});
		}
	}, []);

	const UserPageHeader = () => {
		return (
			<div className={styles.chat_header}>
				<div className={styles.backimg}
					role = 'button'
					onClick = {() => {}}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					<Link to='/'>
						<img src='http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png' alt='back' />
					</Link>
				</div>
				<p className={styles.header_chat}>Edit Profile</p>
				<div className={styles.saveBtn}
					role = 'button'
					onClick = {() => {
						localStorage.setItem('userinfo', JSON.stringify(data));}
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
			localStorage.setItem('userinfo', JSON.stringify(data));
		}
	};

	function UserPage() {
		const [nameInfo, setNameInfo] = useState(data.fullname);
		const [userInfo, setUserInfo] = useState(data.username);
		const [BioInfo, setBioInfo] = useState(data.biography);
		return (
			<div className={styles.userpage}>
				<div className={styles.avatar}>
					<div className={styles.avatarPic}>
						<img alt='User' src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396728710.png'/>
					</div>
				</div>
				<div className={styles.fullname}>
					<p className={styles.textholdernames}>Full name</p>
					<textarea className={styles.textholder}
						rows = '1' 
						maxLength = '25'
						value = {nameInfo}
						onChange = {(event) => setNameInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(1, event, nameInfo.trim())}
						onBlur = {()=> {
							setData({
								...data,
								fullname: nameInfo.trim()
							});
						}}/>
				</div>
				<div className={styles.username}>
					<p className={styles.textholdernames}>Username</p>
					<textarea className={styles.textholder}
						rows = '1'
						minLength = '5'
						maxLength = '20'
						value = {userInfo}
						onChange = {(event) => setUserInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(2, event, userInfo.trim())}
						onBlur = {() => {
							setData({
								...data,
								username: userInfo.trim()
							});
						}}/>
				</div>
				<div className={styles.biography}>
					<p className={styles.textholdernames}>Bio</p>
					<textarea className={styles.textholder}
						rows = '4'
						maxLength = '150'
						value = {BioInfo}
						onChange = {(event) => setBioInfo(event.target.value)}
						onKeyPress = {(event) => SaveData(3, event, BioInfo.trim())}
						onBlur = {() => {
							setData({
								...data,
								biography: BioInfo.trim()
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
