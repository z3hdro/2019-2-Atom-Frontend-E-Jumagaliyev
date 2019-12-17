import React, {useState, useEffect} from 'react'

export default function SelectedForecast({id}) {
    console.log(id);

    const [forecast, setForecast] = useState([]);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=b9af20ffd3ba40ecb7a0755286c703bc`)
			.then(res => res.json())
			.then(json => {
                console.log(json.list);
                setForecast(json.list);
                return json
            })
    }, [])



    return (
        <div>
            <div>
                example
            </div>
        </div>
    )
}
