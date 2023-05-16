import React from "react";

const Coding04 = () => {
	let name = React.createRef();
	let age = React.createRef();

	const submit = () => {
		console.log("name ", name.current.value);
		console.log("age ", age.current.value);
	};

	return (
		<div>
			<div className="text-center">
				<h1>Coding04</h1>
				<h1>Uncontrolled and controlled components</h1>
			</div>
			<div className="space-y-3 mt-9">
				<input
					placeholder="Name"
					className="px-4 py-3 border rounded-md focus:outline-none"
					ref={name}
				/>
				<br />
				<input
					placeholder="Age"
					className="px-4 py-3 border rounded-md focus:outline-none"
					ref={age}
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

export default Coding04;
