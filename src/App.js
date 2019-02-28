import React, { Component } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<QuoteBox />
				</div>
			</div>
		);
	}
}

export default App;
