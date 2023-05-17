import axios from "axios";
import React, { useEffect, useState } from "react";

const Coding07 = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [users, setUsers] = useState([]);
	const [clickedId, setClickedId] = useState("");
	const getUser = async () => {
		console.log("Hello");
		await axios
			.get("https://646331707a9eead6fadf8b47.mockapi.io/users")
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log("err ", err);
			});
	};

	const handleClickData = async () => {
		if (!name || !age) return;
		if (!clickedId) {
			await axios
				.post("https://646331707a9eead6fadf8b47.mockapi.io/users", {
					name,
					age,
					hobbies: ["Poetry", "Cooking", "Travelling", "Coding", "Piano"],
				})
				.then((res) => {
					console.log("res.data ", res.data);
				})
				.catch((err) => {
					console.log("err ", err);
				});
		} else {
			await axios
				.put(`https://646331707a9eead6fadf8b47.mockapi.io/users/${clickedId}`, {
					name,
					age,
				})
				.then((res) => {
					console.log("res.data ", res.data);
				})
				.catch((err) => {
					console.log("err ", err.message);
				});
		}
		getUser();
		setName("");
		setAge("");
		setClickedId("");
	};
	useEffect(() => {
		getUser();
	}, []);

	// useEffect(() => {
	// 	console.log("Hello");
	// 	axios
	// 		.get("https://646331707a9eead6fadf8b47.mockapi.io/users")
	// 		.then((res) => {
	// 			setUsers(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log("err ", err);
	// 		});
	// }, []);
	const updateData = (user) => {
		console.log("user ", user);
		setName(user.name);
		setAge(user.age);
		setClickedId(user.id);
	};
	const deleteData = async (id) => {
		await axios
			.delete(`https://646331707a9eead6fadf8b47.mockapi.io/users/${id}`)
			.then((res) => {
				console.log("res.data ", res.data);
			})
			.catch((err) => {
				console.log("err ", err);
			});
		getUser();
	};
	return (
		<div>
			<div className="text-center">
				<h1>Coding07</h1>
			</div>

			<div className="mt-4 text-center">
				POST, GET, PUT or PATCH, and DELETE
			</div>

			<div className="w-[80%] mx-auto flex flex-col space-y-3 mt-12">
				<input
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="px-4 py-3 border rounded-md focus:outline-none"
				/>
				<input
					placeholder="Age"
					value={age}
					onChange={(e) => setAge(e.target.value)}
					className="px-4 py-3 border rounded-md focus:outline-none"
				/>
				<button
					onClick={handleClickData}
					className="px-4 py-3 mt-3 border rounded-md bg-gray-300 hover:bg-gray-400"
				>
					{clickedId ? "UPDATE DATA" : "POST DATA"}
				</button>
				{users.map((user) => {
					return (
						<div key={user.id} className="flex items-center justify-between">
							<h1 className="text-xl">
								{user.id}. {user.name}
							</h1>
							<div className="flex items-center justify-between">
								<button
									onClick={() => updateData(user)}
									className="px-4 py-3 mt-3 border rounded-md bg-gray-300 hover:bg-gray-400"
								>
									Edit
								</button>
								<button
									onClick={() => deleteData(user.id)}
									className="px-4 py-3 mt-3 border rounded-md bg-gray-300 hover:bg-gray-400"
								>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Coding07;
