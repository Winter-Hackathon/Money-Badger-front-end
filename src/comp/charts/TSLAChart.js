import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import axios from "axios";
import './chart.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class CandlestickChart extends Component {
  constructor(props) {
    super(props);
    this.TimeSeries = "TIME_SERIES_WEEKLY";
    this.dataPoints = [];
    this.ourValues = [];
    this.count = 0;
  }

  componentDidMount() {
    // this is the stock/currency that is being called
    const state ={
      symbol:"TSLA"
    }
    axios
      .get(
        `https://www.alphavantage.co/query?function=${this.TimeSeries}&symbol=${state.symbol}&interval=5min&apikey=ACT64CZ1Z26W5JYR`
      )
      .then(res => {
        console.log("RES: ", res);
        for (let property in res.data["Weekly Time Series"]) {
          this.ourValues = Object.values(
            res.data["Weekly Time Series"][property]
          );
          if (this.count < 100) {
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
        text: "Tesla Corporation Stock Price"
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
          name: "Tesla Corporation",
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
      </div>
    );
  }
}

export default CandlestickChart;
