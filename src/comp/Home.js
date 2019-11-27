import React from 'react'
import './home.css' 
import logo from '../logo.svg'

function Home() {
    return (
        <>
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="header-title">Money Badger</h1>
            <p className="header-tagline">
            Dig into the history of the worlds currencies and see current up-to-date exchange
            rates.
            </p>
        </div>
        </>
    )
}

export default Home
