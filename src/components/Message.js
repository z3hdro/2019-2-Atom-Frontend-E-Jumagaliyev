/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, {useState, useEffect, useRef} from 'react';
import styles from '../styles/message.module.css';

export default function Message(props) {
	const myRef = useRef(null)

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	

	useEffect(() => {
		const msg = localStorage.getItem(props.name) || "[]";
		setMessages(JSON.parse(msg));
	}, [props.name]);


	useEffect(() => {
		localStorage.setItem(props.name, JSON.stringify(messages));
	}, [messages, props.name]);
 
	
	function MessageList(props) {
		if (props.messages !== "[]") {
			const data = props.messages.map((message) =>
				<div className={styles.chat_box} key={message.id}>
					<span>{message.time}</span>
					<p className={styles.chat_text}>{message.content}</p>
					<span>{message.author}</span>
				</div>
			);
			return (
				<div className={styles.result} ref = {myRef} > {data} </div>
			);
		}
	};

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: "smooth", block: "end"});
	}

	useEffect(scrollToBottom, [messages]);

	const addMessage = event => {
		if (event.key === 'Enter') {
			const date = new Date();
			if (newMessage.trim() !== '') {
				setMessages([
					...messages,
					{
						id: messages.length,
						time: date.toTimeString().slice(0, 5),
						content: newMessage,
						author: "you"
					}
				])
				setNewMessage('');
			}
		}
	};

	return ( 
		<div>
			<div className={styles.chat_header}>
				<div className={styles.backimg}>
					<img onClick={props.route} className={styles.imgclick} src='http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911640directionalleft.png' alt='back' />
				</div>
				<p className={styles.header_chat}>{props.name}</p>
			</div>
			<MessageList messages = {messages} /> 
			<input
				type="text"
				value = {newMessage}
				onChange={event => setNewMessage(event.target.value)}
				onKeyPress={addMessage}
			/>
		</div>
	)
}
