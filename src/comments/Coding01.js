import React, { useEffect, useState } from "react";

const Coding01 = () => {
	const [users, setUsers] = useState([]);
	const [inputUser, setInputUser] = useState([]);
	const [userChange, setUserChange] = useState([]);
	const [restartUser, setRestartUser] = useState(false);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);
	const mapUserId = () => {
		if (!restartUser) {
			setRestartUser(true);
			const userMap = users.map((user) => {
				return { id: user.id * 2, name: user.name, username: user.username };
			});
			setUserChange([...userMap]);
		} else {
			const userMap = userChange.map((user) => {
				return { id: user.id * 2, name: user.name, username: user.username };
			});
			setUserChange([...userMap]);
		}
	};
	const handleChange = (e) => {
		const inputValue = e.target.value;
		setInputUser(inputValue);
		setRestartUser(true);
		setUserChange("");
		const userFilter = users.filter((user) => {
			return user?.name?.toLowerCase().includes(inputValue.toLowerCase());
		});
		setUserChange([...userFilter]);
	};
	const restartButton = () => {
		setRestartUser(false);
		setInputUser("");
	};
	const changeUserId = restartUser ? userChange : users;
	return (
		<div>
			<h1 className="mb-12 text-2xl text-center">Users</h1>
			<div className="flex justify-between items-center px-14">
				<button
					onClick={mapUserId}
					className="px-4 py-3 border rounded-md bg-green-500"
				>
					ID x2
				</button>
				<input
					className="px-4 py-3 border rounded-md focus:outline-none focus:border-gray-500"
					placeholder="Filter User Name"
					value={inputUser}
					onChange={handleChange}
				/>
				<button
					onClick={restartButton}
					className="px-4 py-3 border rounded-md bg-green-500"
				>
					Restart
				</button>
			</div>
			<div className="grid grid-cols-3 gap-3">
				{changeUserId.map((user) => {
					return (
						<ul key={user.id} className="px-4 py-3 border m-1 rounded-md">
							<li> - {user.id}</li>
							<li> - {user.name}</li>
							<li> - {user.username}</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default Coding01;
