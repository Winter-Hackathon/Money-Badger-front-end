import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import axios from "axios";
import History from "../History";
import "./chart.css";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CandlestickChart extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS: ", props);
    if (props.match.params.type === "stock") {
      this.TimeSeries = "TIME_SERIES_WEEKLY";
      this.market = "";
    } else {
      this.TimeSeries = "DIGITAL_CURRENCY_WEEKLY";
      this.market = "&market=USD";
    }
    this.dataPoints = [];
    this.ourValues = [];
    //count controls how many data points we receive
    this.count = 0;
    // this value will pass to the history component to tell it to return the info about the current we are looking at
    this.history = "TSLA";
    this.symbol = props.match.params.name;
    this.state = {
      dataPoints: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.alphavantage.co/query?function=${this.TimeSeries}&symbol=${this.symbol}${this.market}&apikey=ACT64CZ1Z26W5JYR`
      )
      .then(res => {
        console.log("RES: ", res);
        for (let property in res.data[Object.keys(res.data)[1]]) {
          this.ourValues = Object.values(
            res.data[Object.keys(res.data)[1]][property]
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
        }
        this.chart.render();
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.match.params.name !== prevProps.match.params.name) {
    // console.log("Name: ", this.props.match.params.name);
    if (this.props.match.params.type === "stock") {
      this.TimeSeries = "TIME_SERIES_WEEKLY";
      this.market = "";
    } else {
      this.TimeSeries = "DIGITAL_CURRENCY_WEEKLY";
      this.market = "&market=USD";
    }
    this.dataPoints = [];
    this.ourValues = [];
    //count controls how many data points we receive
    this.count = 0;
    // this value will pass to the history component to tell it to return the info about the current we are looking at
    this.history = "TSLA";
    this.symbol = this.props.match.params.name;

    axios
      .get(
        `https://www.alphavantage.co/query?function=${this.TimeSeries}&symbol=${this.symbol}${this.market}&apikey=ACT64CZ1Z26W5JYR`
      )
      .then(res => {
        for (let property in res.data[Object.keys(res.data)[1]]) {
          this.ourValues = Object.values(
            res.data[Object.keys(res.data)[1]][property]
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
        }
        this.chart.options.data[0].dataPoints = this.dataPoints;
        this.chart.render();
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
    // }
  }

  render() {
    const options = {
      theme: "dark2", // "light1", "light2", "dark1", "dark2"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: `${this.props.match.params.name}`
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
        {/* this is our info competent it displays information about the currency we are looking at */}
        {/* <History props={this.symbol} /> */}
      </div>
    );
  }
}

export default CandlestickChart;
