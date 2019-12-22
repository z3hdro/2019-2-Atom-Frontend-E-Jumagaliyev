/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable func-names */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';
import { API_URL } from './config';

export default function Record({id,chunks,setChunks}) {
	const [recording, setRecording] = useState(null);
	const [recorder, setRecorder] = useState(null);


	async function fetchData() {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const mediaRecorder = new MediaRecorder(stream);
			return mediaRecorder;
		} catch(err) {
			console.log(err);
			return -1;
		}
	}

	const StartRecord = (record) => {
		const parts = [];
		const recordAudio = record;
		recordAudio.start(10);
		console.log('recorder started');
		recordAudio.ondataavailable = (event) => {
			parts.push(event.data);
		};
		setChunks(parts);
		setRecorder(recordAudio);
		setRecording(true);
	};
	
	const StopRecord = () => {
		recorder.stop();
		console.log('recorder stopped');
		const blob = new Blob(chunks, { type: recorder.mimeType });
		const data = new FormData();
		data.append('chat_id', id);
		data.append('content', '');
		data.append('attachment_type', 'audio_message');
		data.append('media', blob);
		fetch(`${API_URL}/message/createmessage/`, {
			method: 'POST',
			headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`
			},
			body: data,
		})
			.then(result => {
				console.log(result.status);
				return result.json();
			})
			.catch(err => {
				console.log(err.message);
			});
		setRecording(false);
		setChunks([]);
	};
	
	const recordHandler = (event) => {
		event.preventDefault();
		if (recording === null) {
			fetchData().then((mediaRecorder) => StartRecord(mediaRecorder));
		} else if (recording) {
			StopRecord();
		} else {
			StartRecord(recorder);
		}
	};
	
	return (
		<div>
			<div className = {styles.audio_button}
				role = 'button'
				onClick={(event) => recordHandler(event)}
				style={recording ? {backgroundColor: 'rgb(250, 12, 60)'} : {backgroundColor: 'rgb(228, 228, 228)'}}
				onKeyPress={() => {}}
				tabIndex = '0'>
				<img src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396728712.png' alt='audioRecord'/>
			</div>
		</div>
	);
};


Record.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	id : PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	chunks: PropTypes.array.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	setChunks: PropTypes.func.isRequired,
};