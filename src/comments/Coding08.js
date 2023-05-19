import React, { useEffect, useState } from "react";
import axios from "axios";
const pinAPI = `https://api.postalpincode.in/pincode/`;

const Coding08 = () => {
	const [pin, setPin] = useState("");
	useEffect(() => {
		const debouncing = setTimeout(() => {
			axios
				.get(pinAPI + pin)
				.then((res) => {
					console.log("res ", res.data[0].PostOffice);
				})
				.catch((err) => {
					console.log(err);
				});
		}, 2000);
		return () => {
			clearTimeout(debouncing);
		};
	}, [pin]);
	// const searchPin = (value) => {};
	return (
		<div>
			<div>
				<h1 className="text-2xl">Debouncing</h1>
				<p>
					In JavaScript, a debounce function makes sure that your code is only
					triggered once per user input. Search box suggestions, text-field
					auto-saves, and eliminating double-button clicks are all use cases for
					debounce.
				</p>
			</div>
			<div className="mt-12">
				<input
					onChange={(event) => setPin(event.target.value)}
					placeholder="Enter your Pin-Code"
					className="px-4 py-3 border rounded-md focus:outline-none"
				/>
			</div>
		</div>
	);
};

export default Coding08;
