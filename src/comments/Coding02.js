import React, { useState } from "react";

const Coding02 = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [array, setArray] = useState([
		{
			name: "Nishant",
			age: 26,
		},
		{
			name: "Uday",
			age: 26,
		},
	]);
	const [object, setObject] = useState({
		name: "Nishant",
		age: 26,
	});

	const increment = () => {
		setCount(count + 1);
		setIsVisible(!isVisible);
		setName("Nishant");
		setArray([...array, { name: "Thet", age: 21 }]);
		setObject({
			name: "Naing",
			age: 21,
		});
	};
	return (
		<div>
			<div className="text-center">
				<h1>Coding02</h1>
				<h1>What are states</h1>
			</div>

			{isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}
			<h1>{name}</h1>
			<h1>
				{array.map((name, index) => (
					<div key={index}>
						{name.name} - {name.age}
					</div>
				))}
			</h1>
			{object && (
				<h1>
					change object {object.name} {object.age}
				</h1>
			)}

			<h1>{count}</h1>
			<button
				onClick={increment}
				className="px-4 py-3 border rounded-md bg-gray-300"
			>
				Change States
			</button>
		</div>
	);
};

export default Coding02;
