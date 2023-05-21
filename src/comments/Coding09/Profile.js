import React, { useState } from "react";

const Profile = ({ setName }) => {
	const [handleChangeName, setHandleChangeName] = useState("");
	const handleChange = (e) => {
		const value = e.target.value;
		setHandleChangeName(value);
	};

	const handleClick = () => {
		setHandleChangeName("");
		setName(handleChangeName);
	};
	return (
		<div>
			<div>
				<input
					value={handleChangeName}
					className="px-4 py-3 border rounded-md focus:outline-none"
					onChange={handleChange}
				/>
				<button
					className="px-4 py-3 border rounded-md bg-gray-300"
					onClick={handleClick}
				>
					Change Name
				</button>
			</div>
		</div>
	);
};

export default Profile;
