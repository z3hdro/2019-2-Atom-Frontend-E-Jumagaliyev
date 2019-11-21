/* eslint-disable no-alert */

import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';
import Record from './AudioRecord';



export default function Message({name}) {
	const [location, setLocation] = useState([]);
	const myRef = useRef(null);
	const [messages, setMessages] = useState([]);
	const [photoAttach, setPhotoAttach] = useState([]);
	const [audioMessage, setAudioMessage] = useState([]);
	

	useEffect(() => {
		const msg = localStorage.getItem(name) || '[]';
		setMessages(JSON.parse(msg));
	}, [name]);


	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(messages));
	}, [messages, name]);


	function MessageList(param) {
		const data = [];
		if (param.messages !== '[]') {
			param.messages.map((message) =>
				data.push(
					<div className={styles.chat_box} key={message.id}>
						<span className={styles.msg}>{message.time}</span>
						<p className={styles.chat_text}>
							{message.content}
						</p>
						<span className={styles.msg}>{message.author}</span>
					</div>
				)
			);
			data.push(location);
			return (
				<div className={styles.result} ref = {myRef}> 
					{data.concat(photoAttach, audioMessage)} 
				</div>
			);
		}
	};


	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
	};


	useEffect(scrollToBottom, [messages]);
	useEffect(scrollToBottom, [location]);
	useEffect(scrollToBottom, [photoAttach]);


	function InputMessage() {
		const [visible, setVisible] = useState(false);
		const [newMessage, setNewMessage] = useState('');
		const [attachments, setAttachments] = useState([]);
		const [preview, setPreview] = useState(false);
		const [imageURL, setImageURL] = useState([]);
		const [selectedFile, setSelectedFile] = useState();
		const [chunks, setChunks] = useState([]);
		const CurrMessageInput = useRef(null);
		const fileInput = React.createRef();


		const inputFocus = () => {
			CurrMessageInput.current.focus();
		};
	
		useEffect(inputFocus, [CurrMessageInput]);


		const geoFindMe = () => {
			const date = new Date();
			const author = 'you';
		
			function success(position) {
				const {latitude} = position.coords;
				const {longitude} = position.coords;
				const locationMessage = `your location is ${latitude}/${longitude}`;
				setLocation([
					...location,
					<div className={styles.chat_box} key={location.length}>
						<span className={styles.msg}>{date.toTimeString().slice(0, 5)}</span>
						<p className={styles.chat_text}>
							<a href = {`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`}>{locationMessage}</a>
						</p>
						<span className={styles.msg}>{author}</span>
					</div>
				]);
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


		function fileUploadHandler(files) {
			const data = new FormData();
			data.append('image', files);
			fetch('https://tt-front.now.sh/upload', {
				method: 'POST',
				body: data,
			});
		};


		function HandleClick() {
			fileInput.current.click();
		}


		const MenuAttachment = () => {
			return (
				<div className={styles.menulist}>
					<div className={styles.option}
						role = 'button'
						onClick={() => geoFindMe(messages, setMessages)}
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


		const addMessage = (event) => {
			if (event.key === 'Enter') {
				const date = new Date();
				const author = 'you';
				if (newMessage.trim() !== '') {
					setMessages([
						...messages,
						{
							id: messages.length,
							time: date.toTimeString().slice(0, 5),
							content: newMessage,
							author: 'you',
						}
					]);
					setNewMessage('');
				}
				if (attachments !== '[]'){
					const photoData = [];
					attachments.map((picture, index) =>
						photoData.push(
							<div className={styles.chat_box} key={imageURL[index]}>
								<span className={styles.msg}>{date.toTimeString().slice(0, 5)}</span>
								<p className={styles.chat_text}>
									{newMessage}
								</p>
								<div className={styles.chat_picture}>
									<img 
										alt='pic'
										src={`${imageURL[index]}`}
										onLoad = {() => {
											window.URL.revokeObjectURL(imageURL[index]);
										}}
									/>
								</div>
								<span className={styles.msg}>{author}</span>
							</div>
						)
					);
					setPhotoAttach(photoData);
					fileUploadHandler(selectedFile);
				};
				setPreview(!preview);
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
					<Record audioMessage={audioMessage} setAudioMessage={setAudioMessage} chunks={chunks} setChunks={setChunks}/>
				</div>
			</div>
		);
	};

	return ( 
		<div>
			<div className={styles.chat_header}>
				<div className={styles.backimg}>
					<Link to='/'>
						<img className={styles.imgclick} 
							src='http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png' alt='back' />
					</Link>
				</div>
				<p className={styles.header_chat}>{name}</p>
			</div>
			<MessageList messages = {messages} />
			<InputMessage />
		</div>
	);
}


Message.propTypes = {
	name : PropTypes.string.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	visible : PropTypes.func.isRequired
};