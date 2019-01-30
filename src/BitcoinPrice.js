import React, { Component } from "react";

class BitcoinPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoinprice: {}
    };
  }
  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(Response => {
        return Response.json();
      })
      .then(Result => {
        console.log(Result);
        this.setState({ bitcoinprice: Result });
      });
  }

  render() {
    if (Object.keys(this.state.bitcoinprice).length === 0) {
      return <div className="ticker"> Bitcoins!</div>;
    } else {
      return (
        <div className="ticker">{this.state.bitcoinprice.bpi.USD.rate}</div>
      );
    }
  }
}
export default BitcoinPrice;
