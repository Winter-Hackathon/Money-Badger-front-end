import React , { useEffect, useState } from 'react';
import './home.css';

import Axios from 'axios';
import { functionTypeAnnotation } from '@babel/types';

export default function Home() {
    // holds the type of currency being exchanged from
    const [From, setFrom] = useState('USD')
    // holds the type of currency being exchanged to
    const [To, setTo] = useState('EUR')
    // this holds the currency exchange rate
    const [Ex, setEx] = useState(null)
    // state used to handle the drop down menu
    const [fMenu, setfMenu] = useState(false) // handles selecting the from currency
    const [tMenu, settMenu] = useState(false) // handles selecting the to currency

useEffect(() => {
    // this GET handles the exchange rates
    Axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${From}&to_currency=${To}&apikey=ACT64CZ1Z26W5JYR`)
    .then(response =>{ 
        response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"] === undefined
        ? setEx(0)
        : setEx(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"])
    }).catch(error =>{console.log(error)})
}, [From, To])

// these functions changes th currency being converted
function UpdateFrom(fx){
    if(fx === From){
        console.log('Already on that one!')
    } else{
        setFrom(fx)
    }
}

function UpdateTo(fx){
    if(fx === To){
        console.log('Already on that one!')
    } else{
        setTo(fx)
    }
}

    return (
        <div className="homepage">
            <p className="homepage-title-block">Choose a Currency to See it's exchange value with others around the world.</p>
            <div className="choice-block">

                    <div className="drop-menu">
                    <button onClick={fMenu ? () => setfMenu(false) : () => setfMenu(true)}>
                    From {From}</button>
                    {fMenu ?
                    (   <div className="drop-menu-contents">
                           <button
                                className="drop-menu-contents-button" 
                                onClick={() => UpdateFrom('USD')}>
                                USD </button>
                            <button
                                className="drop-menu-contents-button"  
                                onClick={() => UpdateFrom('EUR')}>
                                EUR </button>
                            <button 
                                onClick={() => UpdateFrom('CNY')}
                                className="drop-menu-contents-button" >
                                CNY </button>
                        </div>) : null}
                    </div>

                    <div className="drop-menu">
                    <button onClick={tMenu ? () => settMenu(false) : () => settMenu(true)}>
                    To {To}</button>
                    {tMenu ?
                    (   <div className="drop-menu-contents">
                           <button 
                                onClick={() => UpdateTo('EUR')}
                                className="drop-menu-contents-button" >
                                EUR</button>
                            <button 
                                onClick={() => UpdateTo('USD')}
                                className="drop-menu-contents-button" >
                                USD </button>
                            <button 
                                onClick={() => UpdateTo('CNY')}
                                className="drop-menu-contents-button" >
                                CNY </button>
                        </div>) : null}
                    </div>
      
            </div>
            <div className="display-block">
                Real time Exchange rate: <br/><h5 className="ExRate">{Ex === undefined ? 0 : Ex}</h5>
            </div>
        </div>
    )
}
