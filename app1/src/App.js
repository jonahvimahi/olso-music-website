import React, { Component } from "react";
import "./App.css";
import "./Reset.css";
import Home from "./Components/Home/Home";

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { matches: window.matchMedia("(min-width: 600px)").matches };
	}
	componentDidMount() {
		const handler = e => this.setState({ matches: e.matches });
		window.matchMedia("(min-width: 600px)").addListener(handler)
	}
	render() {
		return (
			<div className="backGround ">
				<Home />
			</div>
		);
	}
}
