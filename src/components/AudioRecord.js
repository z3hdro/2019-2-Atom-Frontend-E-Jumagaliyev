/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable func-names */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/message.module.css';

export default function Record({audioMessage,setAudioMessage,chunks,setChunks}) {
	const [recordState, setRecordState] = useState({});
	const [preview, setPreview] = useState(true);
	const [RecordOn, setRecordOn] = useState({backgroundColor: 'rgb(228, 228, 228)'});


	useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia (
				{audio: true}
			)
				.then(function(stream) {
					const mediaRecorder = new MediaRecorder(stream);
					setRecordState({stream: mediaRecorder});
				})
				.catch(function(err) {
					console.log(err);
				});
		} else {
			console.log('getUserMedia not supported on your browser!');
		}
	}, []);


	const StartRecord = (e) => {
		e.preventDefault();
		const parts = [];
		setRecordState({
			...recordState,
			streamState: recordState.stream.start(10)
		});
		
		console.log(recordState.stream.state);
		console.log('recorder started');
		setRecordState({
			...recordState,
			data: recordState.stream.ondataavailable = (event) => {
				parts.push(event.data);
			}
		});
		setChunks(parts);
	};
	
	
	const StopRecord = (event) => {
		event.preventDefault();
		setRecordState({
			...recordState,
			streamState: recordState.stream.stop()
		});
		const date = new Date();
		const author = 'you';
		
		console.log(recordState.stream.state);
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
	
	
	return (
		<div>
			<div className = {styles.audio_button} style={RecordOn}
				role = 'button'
				onClick={(event) => {
					if (preview) {
						StartRecord(event);
						setPreview(!preview);
						setRecordOn({backgroundColor: 'rgb(250, 12, 60)'});
					}
					else {
						StopRecord(event);
						setPreview(!preview);
						setRecordOn({backgroundColor: 'rgb(228, 228, 228)'});
					}
				}}
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