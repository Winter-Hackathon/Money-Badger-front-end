import React from 'react'
import './App.css'
import Home from './comp/Home'
import { Route } from "react-router-dom";

// Views we can render in
import TSLA from './comp/charts/TSLAChart';
import BTC from './comp/charts/BTCChart'

function App() {

  // button functions
  function DisplayTSLA(e){
    window.location = "/elon"
  }
  function DisplayBTC(e){
    window.location = "/btc"
  }


  return (
    <div className="App">
      {/* this displays the header and navigation */}
      <Route path="/" component={Home} />
      <div className="content" >
        {/* we will use router and buttons to switch between the charts */}
        <div className="button-bar">
          <button onClick={DisplayTSLA} > TSLA </button>
          <button onClick={DisplayBTC}> BTC </button>
        </div>
        {/* routes that will be displaced based on button */}
        <div className="chart-view">
          <Route path="/elon" exact component={TSLA} />
          <Route path="/btc" exact component={BTC} />
        </div>
      </div>
    </div>
  )
}

export default App
