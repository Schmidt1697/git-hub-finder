import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		const name = "Nana Pig";

		const loading = false;

		if (loading) {
			return <h4>Loading. . .</h4>;
		}
		return (
			<div className="App">
				{loading ? <h4>Loading...</h4> : <h4>Hello {name}</h4>}
			</div>
		);
	}
}

export default App;
