import React, {useState, useEffect} from 'react';
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
    //     },
    //     {
    //         "id": 745042,
    //         "name": "İstanbul",
    //         "country": "TR",
    //         "coord": {
    //           "lon": 28.983311,
    //           "lat": 41.03508
    //         }
    //     },
    //     {
    //         "id": 874652,
    //         "name": "Orekhovo",
    //         "country": "GE",
    //         "coord": {
    //           "lon": 40.146111,
    //           "lat": 43.351391
    //         }
    //     },
    //     {
    //         "id": 569143,
    //         "name": "Cherkizovo",
    //         "country": "RU",
    //         "coord": {
    //           "lon": 37.728889,
    //           "lat": 55.800835
    //         }
    //     }
    // ])

    const [forecasts, setForecasts] = useState([]);


    useEffect(() => {
        const city_id = special.join();
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${city_id}&units=metric&appid=b9af20ffd3ba40ecb7a0755286c703bc`)
			.then(res => res.json())
			.then(json => {
                console.log(json.list);
                setForecasts(json.list);
                return json
            })
        }, []);

    
    const ForecastPicture = (description) => {
        switch(description) {
            case 'clear sky':
                return 'http://openweathermap.org/img/wn/01d@2x.png'
            case 'few clouds':
                return 'http://openweathermap.org/img/wn/02d@2x.png'
            case 'scattered clouds':
                return 'http://openweathermap.org/img/wn/03d@2x.png'
            case 'broken clouds':
                return 'http://openweathermap.org/img/wn/04d@2x.png'
            case 'shower rain':
                return 'http://openweathermap.org/img/wn/09d@2x.png'
            case 'rain':
                return 'http://openweathermap.org/img/wn/10d@2x.png'
            case 'thunderstorm':
                return 'http://openweathermap.org/img/wn/11d@2x.png'
            case 'snow':
                return 'http://openweathermap.org/img/wn/13d@2x.png'
            case 'mist':
                return 'http://openweathermap.org/img/wn/50d@2x.png'
            default:
                return null;
        }
    };

    const ForecastResult = () => {
        const data = forecasts.map((city) => 
        <Link className={styles.links} to = {`/${city.id}`} key={city.id}>
            <div className={styles.ForecastBox}>
                <div className={styles.TopBox}>
                    <div className={styles.CityName}>
                        {city.name}
                    </div>
                    <div className={styles.Temp}>
                        <img src={ForecastPicture(city.weather[0].description)} alt='pic'/>
                        {city.main.temp}
                    </div>
                </div>
                <div className={styles.BottomBox}>
                    <div className={styles.ExtendInfo}>
                        {`Humidity ${city.main.humidity} | ${city.wind.speed} m/s`}
                    </div>
                    <div className={styles.MaxMinTemp}>
                        {`${city.main.temp_max}/${city.main.temp_min} *С`}
                    </div>
                </div>
            </div>
        </Link>
        );
        
        return (
            <div className={styles.Result}>
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

    const Btn = () => {
        return (
            <div>
                <HeaderForecast />
                <div>
                    <ForecastResult />
                </div>
                <div className={styles.Btn}>
                    <p>
                        Button
                    </p>
                </div>
            </div>  
        )
    }

    return (
        <div>
            <Btn />
        </div>
    )
}
