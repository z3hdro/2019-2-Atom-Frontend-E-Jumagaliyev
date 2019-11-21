

const geoFindMe = () => {
	const date = new Date();
	const author = 'you';

	function success(position) {
		const {latitude} = position.coords;
		const {longitude} = position.coords;
		`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`,

		setMessages([
			...messages,
			<div className={styles.chat_box} key={message.id}>
				<span className={styles.msg}>{date.toTimeString().slice(0, 5)}</span>
				<p className={styles.chat_text}>
					<a href = {message.location}>{message.location}</a>
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
