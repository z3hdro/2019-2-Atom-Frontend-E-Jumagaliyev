/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable func-names */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';

export default function Record({audioMessage,setAudioMessage,chunks,setChunks}) {
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
		const date = new Date();
		const author = 'you';
		console.log('recorder stopped');
		const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
		const data = new FormData();
		data.append('audio', blob);
		fetch('https://tt-front.now.sh/upload', {
			method: 'POST',
			body: data,
		}).then(function(response) {
			console.log(response.status);
			console.log(response);
		});
		const audioURL = window.URL.createObjectURL(blob);
		setAudioMessage([
			...audioMessage,
			<div className={styles.chat_box_audio} key={audioURL}>
				<span className={styles.msg}>{date.toTimeString().slice(0, 5)}</span>
				<div className={styles.audio_record}>
					<audio controls src={audioURL} />
				</div>
				<span className={styles.msg}>{author}</span>
                        
			</div>
		]);
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
			<div className = {styles.audio_button} style={recording ? {backgroundColor: 'rgb(250, 12, 60)'} : {backgroundColor: 'rgb(228, 228, 228)'}}
				role = 'button'
				onClick={(event) => recordHandler(event)}
				onKeyPress={() => {}}
				tabIndex = '0'>
				<img src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396728712.png' alt='audioRecord'/>
			</div>
		</div>
	);
};


Record.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	audioMessage : PropTypes.array.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	chunks: PropTypes.array.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	setAudioMessage : PropTypes.func.isRequired,
	setChunks: PropTypes.func.isRequired,
};