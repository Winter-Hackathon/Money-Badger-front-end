import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import axios from "axios";
import History from '../History'
import './chart.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class CandlestickChart extends Component {
  constructor(props) {
    super(props);
    this.TimeSeries = "DIGITAL_CURRENCY_DAILY";
    this.dataPoints = [];
    this.ourValues = [];
    //count controls how many data points we receive
    this.count = 0;
     // this value will pass to the history component to tell it to return the info about the current we are looking at
    this.history = "BTC"
  }

  componentDidMount() {
    // this is the stock/currency that is being called
    const state ={
      symbol:"BTC"
    }
    axios
      .get(
        `https://www.alphavantage.co/query?function=${this.TimeSeries}&symbol=${state.symbol}&market=CNY&apikey=demo`
      )
      .then(res => {
        console.log("RES: ", res);
        // REMEMBER TO CHECK THE TIME SERIES NAME WHEN CREATING A NEW CHART, THEY NAME THEM VERY DIFFERENTLY
        for (let property in res.data["Time Series (Digital Currency Daily)"]) {
          this.ourValues = Object.values(
            res.data["Time Series (Digital Currency Daily)"][property]
          );
          if (this.count < 24) {
            this.dataPoints.push({
              x: new Date(`${property}`),
              y: [
                Number.parseFloat(this.ourValues[0]),
                Number.parseFloat(this.ourValues[1]),
                Number.parseFloat(this.ourValues[2]),
                Number.parseFloat(this.ourValues[3])
              ]
            });
            this.count++;
          }
          this.chart.render();
        }
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  }

  render() {
    const options = {
      theme: "dark2", // "light1", "light2", "dark1", "dark2"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "BITCOIN PRICE"
      },
      axisX: {
        valueFormatString: "MMM"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: "Price (in USD)"
      },
      data: [
        {
          type: "candlestick",
          showInLegend: true,
          name: "BITCOIN",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMMM YY",
          dataPoints: this.dataPoints
        }
      ]
    };
 
  
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
         {/* this is our info competent it displays information about the currency we are looking at */}
         <History props={this.history}/>
      </div>
    );
  }
}

export default CandlestickChart;
