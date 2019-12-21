import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import styles from '../mainforecast.module.css';


export default function MainForecast() {

    const [special, setSpecial] = useState([
        524901,
        745042,
        874652,
        569143,
        464176,
        563692,
        378867,
        370366,
        462352,
        2267057,
    ])
    const myRef = useRef(null);
    const [forecasts, setForecasts] = useState([]);
    const [toggle, setToggle] = useState(false);

    const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
	};

	useEffect(scrollToBottom, [special]);

    useEffect(() => {
        const city_id = special.join();
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${city_id}&units=metric&appid=b9af20ffd3ba40ecb7a0755286c703bc`)
			.then(res => res.json())
			.then(json => {
                console.log(json.list);
                setForecasts(json.list);
                return json
            })
        }, [special]);


    const WeatherPicture = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

    const ForecastResult = () => {
        const data = forecasts.map((city) => 
        <Link className={styles.links} to = {`/${city.name}/`} key={city.id}>
            <div className={styles.ForecastBox}>
                <div className={styles.TopBox}>
                    <div className={styles.CityName}>
                        {city.name}
                    </div>
                    <div className={styles.Temp}>
                        <img alt='weather' src={WeatherPicture(city.weather[0].icon)}/>
                        {Math.round(city.main.temp)}<sup> o</sup>C
                    </div>
                </div>
                <div className={styles.BottomBox}>
                    <div className={styles.ExtendInfo}>
                        {`Humidity ${city.main.humidity} | ${city.wind.speed} m/s`}
                    </div>
                    <div className={styles.MaxMinTemp}>
                        {Math.round(city.main.temp_max)}<sup> o</sup>C/{Math.round(city.main.temp_min)}<sup> o</sup>C
                    </div>
                </div>
            </div>
        </Link>
        );
        
        return (
            <div className={styles.Result} ref = {myRef}>
                {data}
            </div>
        )
    }

    const HeaderForecast = () => {
        return (
            <div className={styles.Header}>
                <div className={styles.HeaderText}>Manage cities</div>
                <div className={styles.HeaderBtn}>
                    Finder
                </div>
            </div>
        )
    }

    const addUser = (event, city) => {
		if (event.key === 'Enter') {
			if (city !== '') {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b9af20ffd3ba40ecb7a0755286c703bc`)
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        setSpecial([
                            ...special,
                            json.id
                        ])
            })
			}
		}
	};

    const CreateInput = () => {
		const [newcity, setNewCity] = useState('');
		return (
			<input
				className = {styles.create_chat}
				type='text'
				value={newcity}
				onChange={(event) => setNewCity(event.target.value)}
				onKeyPress={(event) => {addUser(event, newcity.trim());}}
			/>
		); 
    };
    
    return (
        <div className={styles.main}>
            <HeaderForecast />
            <div>
                <ForecastResult />
            </div>
            <div className={styles.Btn}
                role = 'button'
                onClick = {() => {
                    setToggle(!toggle)}}
                onKeyPress = {() => {}}
                tabIndex = '0'>
                <img alt='add' src='https://image.flaticon.com/icons/png/512/149/149156.png'/>
            </div>
            {toggle ? <CreateInput /> : null}
        </div>  
        )
    }