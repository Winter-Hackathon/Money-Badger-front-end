import React from 'react'
import './header.css' 
import logo from '../logo.svg'

function Home() {
    return (
        <>
        <div className="header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="header-title">Money Badger</h1>
            </div>
            <p className="header-tagline">
            Dig into the history of the worlds currencies and see current up-to-date exchange
            rates.
            </p>
        </div>
        </>
    )
}

export default Home
