import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";

const Coding09 = () => {
	const [name, setName] = useState("Nishant");
	return (
		<div>
			<div className="text-center">
				<h1>Coding09</h1>
			</div>
			<div>
				<Home name={name} />
				<Profile setName={setName} />
			</div>
		</div>
	);
};

export default Coding09;
