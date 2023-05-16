import React from "react";

const Coding05 = () => {
	const submit = () => {
		console.log("hello");
	};
	const getData = (event) => {
		console.log(event.target.value);
	};
	return (
		<div>
			<div className="text-center">
				<h1>Coding04</h1>
				<h1>Uncontrolled and controlled components</h1>
			</div>
			<div className="space-y-3">
				<input
					onChange={getData}
					placeholder="Name"
					className="px-4 py-3 border rounded-md focus:outline-none"
				/>
				<br />
				<input
					onChange={getData}
					placeholder="Age"
					className="px-4 py-3 border rounded-md focus:outline-none"
				/>
				<br />
				<button
					onClick={submit}
					className="px-4 py-3 border rounded-md bg-gray-300"
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Coding05;
