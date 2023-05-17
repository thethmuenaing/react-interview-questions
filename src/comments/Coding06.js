import React from "react";

const Coding06 = () => {
	let data = `<p style="font-size: 25px; color: red">This is my home</p>`;
	return (
		<React.Fragment>
			<div className="text-center">
				<h1>Coding06</h1>
			</div>
			<div>
				<div dangerouslySetInnerHTML={{ __html: data }}></div>
			</div>
		</React.Fragment>
	);
};

export default Coding06;
