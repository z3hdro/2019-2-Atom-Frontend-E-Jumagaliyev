/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prefer-destructuring */

import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import styles from '../styles/chatlist.module.css';



function ChatList({logout}) {
	
	const myRef = useRef(null);
	const [chats, setChats] = useState([]);
	const [toggle, setToggle] = useState(false);
	const [allUsers, setAllUsers] = useState(null);


	const pollItems = () => {
		fetch('http://localhost:8000/chats/showchats/', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				console.log(json.names);
				if (json.names !== 'NO CHATS') {
					setChats(json);
				}
				
			});
	};
	
	useEffect(() => {
		const t = setInterval(() => pollItems(), 15000);
		return () => clearInterval(t);
	});

	useEffect(() => {
		pollItems();

		fetch('http://localhost:8000/users/showusers', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				// console.log(json.result);
				setAllUsers(json.result);
			});
	}, []);

	const MenuList = ({visible}) => {
		return (
			<div className={styles.menulist}>
				<div className={styles.closeMenuBtn}
					role = 'button'
					onClick = {() => {
						visible(false);}}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					<img alt='Close' src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png'/>
				</div>
				<div className={styles.linksCont}>
					<Link className={styles.links} to='/profile/'>Profile</Link>
				</div>
				<div className={styles.linksCont}>
					<Link className={styles.links} to='/support/'>Support</Link>
				</div>
			</div>
		);
	};

	const ChatHeader = () => {
		const [visible, setVisible] = useState(false);
		return (
			<div className={styles.chatlist_header}>
				<div className={styles.menu_btn}
					role = 'button'
					onClick = {() => setVisible(!visible)}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					<img src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727847.png' alt='menu'/>
					{visible ? <MenuList visible = {setVisible}/>: null}
				</div>
				<div className={styles.header_messenger}>
					<p>Messenger</p>
				</div>
				<div className={styles.finder_btn}>
					{/* <img className={styles.findPic} src='http://s1.iconbird.com/ico/2013/1/569/w24h24138981479606magnify.png' alt='FindBtn'/> */}
					<span className={styles.Login}
						role = 'button'
						onClick = {logout}
						onKeyPress = {() => {}}
						tabIndex = '0'>
							LogOut
					</span>
				</div>
			</div>
		);
	};

	function UserList() {
		if (chats.toString() !== '') {
			const data = chats.names.map((user) =>
				<Link className={styles.links} to= { user.is_group_chat ? `/groupmessage/:${user.id}/` : `/message/:${user.id}/`} key={`chat_${user.id}`}>
					<div className={styles.user_box} >
						<div className={styles.avatar}>
							<img alt='User' src={user.avatar} style={{borderRadius:'50%', height: '6vh'}}/>
						</div>
					
						<div className={styles.chatContainer}>
							<p className={styles.chat_header}>{user.topic}</p>
							<p className={styles.msg}>{user.last_message}</p>
						</div>
						
						<div className={styles.indicatorCont}>
							<span className={styles.time}>
								{ (user.last_message === '') ?
									'' : 
									new Date(user.last_message_time).toTimeString().slice(0,5)}
							</span>
							{ (user.last_message === '') ?
								null :
								<img className={styles.indicator} alt='' src='http://s1.iconbird.com/ico/0912/fugue/w24h241349011565tick.png'/>
							}
						</div>
					</div>
				</Link>
			);
			return (
				<div className={styles.messages} ref = {myRef}> {data} </div>
			);
		}
		return <div className={styles.messages} ref = {myRef}/>;
	};

	const sendToServer = (user, person, groupChatUsers, isGroupChat) => {
		const myset = new Set(groupChatUsers);
		console.log(myset);
		// console.log(typeof(user));
		console.log(user);
		const data = new FormData();
		data.append('is_group_chat', isGroupChat);
		data.append('topic', user);
		if (isGroupChat === false) {
			data.append('username', person);
		}
		if (isGroupChat === true) {
			for (const value of myset) data.append('username', value);
		}
		fetch('http://localhost:8000/chats/createchat/', {
			method: 'POST',
			headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`,
			},
			body: data,
		})
			.then(result => {
				// console.log(result);
				return result.json();
			})
			.then(json => {
				console.log(json);
			});
	};
	
	const addUser = (event, user, setUser, person, groupChatUsers, isGroupChat) => {
		if (event.key === 'Enter') {
			if (user !== '') {
				sendToServer(user, person, groupChatUsers, isGroupChat);
				setUser('');
				// window.location.reload();
			}
		}
	};

	const Contacts = ({ groupChatUsers, setGroupChatUsers, person, setPerson, isGroupChat, setIsGroupChat}) => {

		const contactList = allUsers.map(contact =>
			<div 
				className={styles.contacts}
				style={(contact.username === person) ?
					{backgroundColor: 'rgb(255, 102, 102)'} :
					null}
				key={contact.id}
				role = 'button'
				onClick = { () => {
					setPerson(contact.username);
					setGroupChatUsers([
						...groupChatUsers,
						contact.username
					]);
				}}
				onKeyPress = {() => {}}
				tabIndex = '0'>
				{contact.username}
			</div>
		);
		return (
			<div>
				<div
					className={styles.contacts}
					style = {isGroupChat ? {backgroundColor: 'rgb(190, 190, 190)'} : {backgroundColor: 'rgb(214, 214, 214)'}}
					role = 'button'
					onClick = {() => {
						setIsGroupChat(!isGroupChat);
					}}
					onKeyPress = {() => {}}
					tabIndex = '0'>
					Create A Group Chat
				</div>
				{contactList}
			</div>);
	};
	
    
	const CreateInput = () => {
		const [user, setUser] = useState('');
		const [person, setPerson] = useState();
		const [groupChatUsers, setGroupChatUsers] = useState([]);
		const [isGroupChat, setIsGroupChat] = useState(false);
		return (
			<div className={styles.userlist}>
				{(allUsers === null) ? 
					null :
					<Contacts groupChatUsers={groupChatUsers} setGroupChatUsers={setGroupChatUsers} person={person} setPerson={setPerson} isGroupChat={isGroupChat} setIsGroupChat={setIsGroupChat}/>
				}
				<input
					className = {styles.create_chat}
					type='text'
					value={user}
					onChange={(event) => setUser(event.target.value)}
					onKeyPress={(event) => {addUser(event, user.trim(), setUser, person, groupChatUsers, isGroupChat);}}
				/>
			</div>
		); 
	};   
     
	function toggleBtn() {
		setToggle(!toggle);
	}
    
	const CreateButton = () => {
		return (
			<div>
				<button type='button' className={styles.btn_chat} onClick={() => toggleBtn()}>
					<img alt='Создать чат' src='http://s1.iconbird.com/ico/0512/GlyphIcons/file1337170571.png'/>
				</button>
				{toggle ? <CreateInput /> : null}
			</div>
		);
	};

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
	};

	useEffect(scrollToBottom, [chats]);

	Contacts.propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		groupChatUsers : PropTypes.array.isRequired,
		setGroupChatUsers : PropTypes.func.isRequired,
		person : PropTypes.string.isRequired,
		setPerson : PropTypes.func.isRequired,
		isGroupChat : PropTypes.bool.isRequired,
		setIsGroupChat : PropTypes.func.isRequired
	};

	return (
		<div>
			<ChatHeader />
			<UserList />
			<CreateButton />
		</div>
	);
}

ChatList.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	visible : PropTypes.func.isRequired,
	logout : PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout())
	};
};


export default connect(null, mapDispatchToProps)(ChatList);