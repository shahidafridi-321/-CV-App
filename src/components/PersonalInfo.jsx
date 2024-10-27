import React, { useState } from "react";
import { Button } from "./Button";

export const PersonalInfo = () => {
	const [personalInfo, setpersonalInfo] = useState({
		name: "",
		number: "",
		email: "",
	});

	const [displayInfo, setDisplayInfo] = useState({
		name: "Shahid",
		number: "09292992",
		email: "jshshkhskkj",
	});

	const [isSave, setIsSave] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setpersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleIsSave = () => {
		setDisplayInfo(personalInfo);
		setpersonalInfo({ name: "", number: "", email: "" });
		setIsSave(false);
	};

	const handleEdit = () => {
		setpersonalInfo(displayInfo);
		setIsSave(true);
	};
	return (
		<section
			id="personal-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4"
		>
			<div className="flex flex-col justify-center align-middle md:mx-auto space-y-2 md:col-span-1 border-r border-black px-2">
				<label>
					Name:{" "}
					<input
						name="name"
						disabled={!isSave}
						value={personalInfo.name}
						type="text"
						className="border border-red-400"
						onChange={handleChange}
					/>
				</label>
				<label>
					Number:{" "}
					<input
						name="number"
						disabled={!isSave}
						value={personalInfo.number}
						type="number"
						className="border border-red-400"
						onChange={handleChange}
					/>
				</label>
				<label>
					Email:{" "}
					<input
						name="email"
						disabled={!isSave}
						value={personalInfo.email}
						type="email"
						className="border border-red-400"
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className="md:col-span-3 md:text-center">
				<h1>{displayInfo.name}</h1>
				<p>{displayInfo.number}</p>
				<p>{displayInfo.email}</p>
				<div>
					{isSave ? (
						<Button
							classes=" border-pink-600 "
							onClick={handleIsSave}
							text="Savee"
						/>
					) : (
						<Button
							classes=" border-green-600 "
							onClick={handleEdit}
							text="Edit"
						/>
					)}
				</div>
			</div>
		</section>
	);
};
