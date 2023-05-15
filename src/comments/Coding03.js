import React, { Component } from "react";

export default class Coding03 extends Component {
	constructor() {
		super();
		this.state = {
			name: "Nishant",
			age: 26,
			array: [1, 2, 3, 4, 5, 6],
		};
	}
	changeStatus = () => {
		this.setState({
			age: this.state.age * 2,
			name: "Uday",
		});
	};
	render() {
		return (
			<div>
				<div className="text-center">
					<h1>Coding03</h1>
					<h1>What are states</h1>
				</div>
				<div>
					<h1>{this.state.name}</h1>
					<h1>{this.state.age}</h1>
					<h1>{this.state.array}</h1>
				</div>

				<button
					onClick={this.changeStatus}
					className="px-4 py-3 border rounded-md bg-gray-300"
				>
					Change State
				</button>
			</div>
		);
	}
}
