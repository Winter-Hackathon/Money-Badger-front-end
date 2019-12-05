import React , { useEffect, useState } from 'react';
import './home.css';

import Axios from 'axios';

export default function Home() {
    // holds the type of currency being exchanged from
    const [From, setFrom] = useState('USD')
    // holds the type of currency being exchanged to
    const [To, setTo] = useState('EUR')
    // this holds the currency exchange rate
    const [Ex, setEx] = useState(null)

useEffect(() => {
    Axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${From}&to_currency=${To}&apikey=ACT64CZ1Z26W5JYR`)
    .then(response =>{ 
        response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"] === undefined
        ? setEx(0)
        : setEx(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"])
    }).catch(error =>{console.log(error)})
}, [])

    return (
        <div className="homepage">
            <div className="choice-block">
                <p>Choose a Currency</p>
                <input className="cur-input" placeholder="Choose A Currency"/>
            </div>
            <div className="display-block">
                {From} => {To} <br/>
                RATE: {Ex === undefined ? 0 : Ex}
            </div>
        </div>
    )
}
