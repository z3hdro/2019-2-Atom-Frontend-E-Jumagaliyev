
import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chatlist.module.css';

;

export default function ChatList({route}) {
	
	const myRef = useRef(null);
	const [chats, setChats] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const users = localStorage.getItem('users') || '[]';
		setChats(JSON.parse(users));
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(chats));
	},[chats]);


	const ChatHeader = () => {
		return (
			<div className={styles.chatlist_header}>
				<div className={styles.menu_btn}>
					<img src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727847.png' alt='menu'/>
				</div>
				<div className={styles.header_messenger}>
					<p>Messenger</p>
				</div>
				<div className={styles.finder_btn}>
					<img className={styles.findPic} src='http://s1.iconbird.com/ico/2013/1/569/w24h24138981479606magnify.png' alt='FindBtn'/>
				</div>
			</div>
		);
	};

	const lastMessage = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			const data =  JSON.parse(info);
			return data[data.length - 1].content;
		} 
		return null;
	};

	const lastMessageTime = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			const data =  JSON.parse(info);
			return data[data.length - 1].time;
		}
		return null;
	};

	const checked = (name) => {
		const info = localStorage.getItem(name);
		if (info !== '[]' && info !== null && info !== undefined) {
			return 'http://s1.iconbird.com/ico/0912/fugue/w24h241349011565tick.png';
		}
		return null;
	};

	function UserList(param) {
		if (param.names !== '[]') {
			const data = param.names.map((user) =>
				<div className={styles.user_box} key={user.id}
					onClick = {() => param.route(user.name)}
					onKeyPress={() => {}}
					role = 'button'
					tabIndex = '0'
				>
					<div className={styles.avatar}>
						<img alt='User' src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396728710.png'/>
					</div>
					<div className={styles.chatContainer}>
						<p className={styles.chat_header}>{user.name}</p>
						<p className={styles.msg}>{lastMessage(user.name)}</p>
					</div>
					<div className={styles.indicatorCont}>
						<span className={styles.time}>{lastMessageTime(user.name)}</span>
						<img className={styles.indicator} alt='' src={checked(user.name)}/>
					</div>
				</div>
			);
			return (
				<div className={styles.messages} ref = {myRef}> {data} </div>
			);
		}
	};

    
	const addUser = (event, user) => {
		if (event.key === 'Enter') {
			if (user !== '') {
				setChats([
					...chats,
					{
						id: chats.length,
						name: user
					}
				]);
			}
		}
	};
	
    
	const CreateInput = () => {
		const [user, setUser] = useState('');
		return (
			<input
				className = {styles.create_chat}
				type='text'
				value={user}
				onChange={(event) => setUser(event.target.value)}
				onKeyPress={(event) => {addUser(event, user.trim());}}
			/>
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
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
	};

	useEffect(scrollToBottom, [chats]);

	return (
		<div>
			<ChatHeader />
			<UserList names = {chats} route={route}/>
			<CreateButton />
		</div>
	);
}

ChatList.propTypes = {
	route : PropTypes.func.isRequired
};