import React from 'react'
import './App.css'
import { Route } from "react-router-dom";
import Header from './comp/Header'

// image assets
import Bullet from './assets/a-bullet-from-flowers.gif'

// Views we can render in
import Home from './comp/Home';
import TSLA from './comp/charts/TSLAChart';
import BTC from './comp/charts/BTCChart';
import XLM from './comp/charts/XLMChart';
import LTC from './comp/charts/LTCChart';

function App() {

  // button functions
  function DisplayTSLA(e){
    window.location = "/elon"
  }
  function DisplayBTC(e){
    window.location = "/btc"
  }
  function DisplayXLM(e){
    window.location="/xlm"
  }
  function DisplayLTC(e){
    window.location="/ltc"
  }


  return (
    <div className="App">
        <div className="navbar">
          <a href="/what-is-money">What Is Money</a>
          <a href="/what-is-mining">What Is Mining?</a>
          <a href="/">Return</a>
        </div>
      {/* this displays the header*/}
      <Route path="/" component={Header} />
      <div className="content" >
        {/* we will use router and buttons to switch between the charts */}
        <div className="button-bar">
          <label>Stocks</label>
          <button onClick={DisplayTSLA} > TSLA </button>
          <label>Crypto</label>
          <button onClick={DisplayBTC}> BTC </button>
          <button onClick={DisplayXLM}>STELLAR</button>
          <button onClick={DisplayLTC}>LITECOIN</button>
        </div>
        {/* routes that will be displaced based on button */}
        <div className="chart-view">
          <Route path="/" exact component={Home} />
          <Route path="/elon" exact component={TSLA} />
          <Route path="/btc" exact component={BTC} />
          <Route path="/xlm" exact component={XLM} />
          <Route path="/ltc" exact component={LTC} />
        </div>
        <div className="right-sidebar">
        <a className="side-bar-link" href="https://bitcoin.org/en/choose-your-wallet"><img src={Bullet} className="bullet" />CREATE A BITCOIN WALLET </a><br/>
        <a className="side-bar-link" href=" https://litecoin.org/"><img src={Bullet} className="bullet" />CREATE A LITECOIN WALLET </a><br/>
        <a className="side-bar-link" href="https://www.stellar.org/lumens/wallets/#hardware-wallets"><img src={Bullet} className="bullet" />COLLECT STELLAR! </a><br/>
        side bar for links and wallets
     
        
       
        </div>
      </div>
    </div>
  )
}

export default App
