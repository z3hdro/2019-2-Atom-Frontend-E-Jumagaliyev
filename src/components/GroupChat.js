/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */

import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';
import Record from './AudioRecord';


export default function GroupMessage({id}) {
	const [chatTopic, setChatTopic] = useState('');
	const myRef = useRef(null);
	const [messages, setMessages] = useState([]);
	const [visible, setVisible] = useState(false);
	const [anyAttachment, setAnyAttachment] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [attachments, setAttachments] = useState([]);
	const [preview, setPreview] = useState(false);
	const [imageURL, setImageURL] = useState([]);
	const [selectedFile, setSelectedFile] = useState();
	const [chunks, setChunks] = useState([]);
	const [myID, setMyID] = useState();
	const [location, setLocation] = useState('');
	
	const pollItems = () => {
		fetch(`http://localhost:8000/message/showgroupmessages/?chat_id=${id}`, {
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
				console.log(typeof(json.result));
				if (json.result !== 'chat is empty') {
					setMessages(json.result);
				}
			});
	};
	
	useEffect(() => {
		const t = setInterval(() => pollItems(), 3000);
		return () => clearInterval(t);
	});

	useEffect(() => {
		fetch('http://localhost:8000/users/findme/', {
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
				setMyID(json.result);
			});

		fetch(`http://localhost:8000/chats/showchat/?chat_id=${id}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				setChatTopic(json.result);
				
			});
	}, );

	const InsideContent = (message) => {
		if (message.attachment_type === 'images') {
			const picturesData = [];
			message.attachment_url.map((pic) => 
				picturesData.push(
					<div key={pic}>
						<img
							className={styles.selected_pictures}
							src={pic}
							alt='img'/>
					</div>
				)
			);
			return picturesData;
		} 
		if (message.attachment_type === 'geolocation') {
			return (<a href = {message.attachment_url[0]}> Click on this message, it is my location </a>);
		} 
		if (message.attachment_type === 'audio_message') {
			return (
				<div className={styles.audio_record}>
					<audio controls src={message.attachment_url[0]}/>
				</div> );
		} 
		return (
			<p className={styles.chat_text}>
				{message.content}
			</p>
		);
	};

	function MessageList() {
		const data = [];
		if (messages.toString() !== '') {
			messages.map((message) => {
				data.push(
					<div className={(message.attachment_type === 'audio_message') ? styles.chat_box_audio : styles.chat_box_me}
						style={(message.user_id === myID) ?
							{backgroundColor: 'rgb(173, 216, 230)', alignSelf: 'flex-end'} :
							{backgroundColor: 'rgb(200, 200, 200)', alignSelf: 'flex-start'}}
						key={message.id}>
						<span className={styles.msg}>{new Date(message.added_at).toTimeString().slice(0,5)}</span>
						{InsideContent(message)}
						<span className={styles.msg}>
							{message.username}
						</span>
					</div>
				);
				return data;
			});
			return (
				<div className={styles.result} ref = {myRef}> 
					{data} 
				</div>
			);
		}
		return (
			<div className={styles.result} ref = {myRef}> 
				{messages}
			</div>
		);
	};


	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
	};


	useEffect(scrollToBottom, [messages]);


	function InputMessage() {
		
		const fileInput = React.createRef();
		const CurrMessageInput = useRef(null);


		const inputFocus = () => {
			CurrMessageInput.current.focus();
		};
	
		useEffect(inputFocus, [CurrMessageInput]);


		const geoFindMe = (event) => {
			event.preventDefault();
			function success(position) {
				setAnyAttachment('geolocation');
				const {latitude} = position.coords;
				const {longitude} = position.coords;
				setLocation(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
				setNewMessage(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
			}
		
			function error() {
				alert('Unable to retrieve your location');
			}
			
			if (!navigator.geolocation) {
				alert('Geolocation is not supported by your browser');
			} else {
				navigator.geolocation.getCurrentPosition(success, error);
			}
		};


		const fileSelectedHandler = (files) => {
			if (files.length > 10) {
				alert('LIMIT of 10 images');
			} else {
				setPreview(true);
				setAnyAttachment('images');
				const fileList = [];
				const fileListURL = [];
				setSelectedFile(files);
				for (let i = 0; i < files.length; i+=1) {
					const fileURL = window.URL.createObjectURL(files[i]);
					fileListURL.push(fileURL);
					fileList.push(
						<div key={i}>
							<img
								className={styles.selected_pictures}
								src={fileURL}
								alt='img'/>
						</div>
					);
				};
				setAttachments(fileList);
				setImageURL(fileListURL);
			}
		};

		function HandleClick() {
			fileInput.current.click();
		}

		const MenuAttachment = () => {
			return (
				<div className={styles.menulist}>
					<div className={styles.option}
						role = 'button'
						onClick={(event) => geoFindMe(event)}
						onKeyPress={() => {}}
						tabIndex = '0'>
						<p>Местоположение</p>
					</div>
					<div className={styles.closeMenuBtn}
						role = 'button'
						onClick = {() => {
							setVisible(false);}}
						onKeyPress = {() => {}}
						tabIndex = '0'>
						<img alt='Close' src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png'/>
					</div>
				</div>
			);
		};


		const sendToServer = () => {
			console.log(selectedFile);
			const data = new FormData();
			data.append('chat_id', id);
			data.append('content', newMessage);
			switch(anyAttachment) {
				case 'images':
					data.append('attachment_type', anyAttachment);
					for (let i = 0; i < selectedFile.length; i+=1) {
						data.append('media', selectedFile[i]);
					}
					break;
				case 'geolocation':
					data.append('attachment_type', anyAttachment);
					data.append('geolocation_url', location);
					break;
				default:
					data.append('attachment_type', null);
			}
			fetch('http://localhost:8000/message/createmessage/', {
				method: 'POST',
				headers: {
					'Authorization': `Token ${localStorage.getItem('token')}`,
				},
				body: data,
			})
				.then(result => {
					console.log(result);
					return result.json();
				})
				.then(json => {
					console.log(json);
				});
			setAnyAttachment(null);
		};

		const addMessage = (event) => {
			if (event.key === 'Enter') {
				if ((newMessage.trim() !== '') || (attachments.toString() !== '')) {
					sendToServer();
					setNewMessage('');
					for (let i = 0; i < imageURL.length; i+=1) {
						window.URL.revokeObjectURL(imageURL[i]);
					}
					setAttachments([]);
				}
				setPreview(!preview);
				pollItems();
			}
		};


		const previewList = 
			<div className={styles.attachment_block}>
				{attachments}
			</div>;

		return (
			<div className={styles.input_container}
				onDragEnter={(event) => event.preventDefault()}
				onDragOver={(event) => event.preventDefault()}
				onDrop={(event) => {
					event.preventDefault();
					fileSelectedHandler(event.dataTransfer.files);
				}}>
				{preview ? previewList : null}
				<div className={styles.input_block}>
					<div className={styles.message_menu}
						role = 'button'
						onClick={() => setVisible(!visible)}
						onKeyPress={() => {}}
						tabIndex = '0'>
						<img src='http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911640clip.png' alt='menu' />
						{visible ? <MenuAttachment />: null}
					</div>
					
					<input
						type='text'
						value={newMessage}
						onChange={event => setNewMessage(event.target.value)}
						onKeyPress={event => addMessage(event, newMessage, setNewMessage)}
						ref={CurrMessageInput}
					/>
					<div className={styles.add_button}>
						<input
							className={styles.photoAttach}
							type='file'
							multiple
							accept='image/*'
							onChange={(event) => fileSelectedHandler(event.target.files)}
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
					<Record id={id} chunks={chunks} setChunks={setChunks}/>
				</div>
			</div>
		);
	};

	return ( 
		<div>
			<div className={styles.chat_header}>
				<div className={styles.backimg}>
					<Link to='/chatlist/'>
						<img className={styles.imgclick} 
							src='http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png' alt='back' />
					</Link>
				</div>
				<p className={styles.header_chat}>{chatTopic}</p>
			</div>
			<MessageList messages = {messages} />
			<InputMessage />
		</div>
	);
}


GroupMessage.propTypes = {
	id : PropTypes.string.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	visible : PropTypes.func.isRequired
};