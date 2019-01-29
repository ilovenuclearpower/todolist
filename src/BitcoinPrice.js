import React, { Component } from "react";

class BitcoinPrice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bitcoinprice: {}
		};
	}
	ComponentDidMount() {
		fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(
			Response =>
				this.setState(
					this.state.bitcoinprice,
					JSON.parse(currentprice.json)
				)
		);
	}

	render() {
		if (Object.keys(this.state.bitcoinprice).length == 0) {
			return <div>Bitcoin Prices are Loading</div>;
		} else {
			return (
				<div className="ticker">{this.state.bitcoinprice.bpi.rate}</div>
			);
		}
	}
}

export default BitcoinPrice;
