import React from "react";
// import Coding10 from "./Coding10";
// import Coding09 from "./Coding09/Coding09";

const Coding10 = React.lazy(() => import("./Coding10"));
const Coding09 = React.lazy(() => import("./Coding09/Coding09"));

const Coding11 = () => {
	return (
		<div>
			<div>
				<h1>Lazy loading</h1>
			</div>
			<div className="space-y-9">
				<Coding10 />
				<Coding09 />
			</div>
		</div>
	);
};

export default Coding11;
