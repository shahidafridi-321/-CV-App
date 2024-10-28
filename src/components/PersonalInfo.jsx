import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

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
	const [displayForm, setDisplayForm] = useState("hidden");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setpersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleSave = () => {
		setDisplayInfo(personalInfo);
		setpersonalInfo({ name: "", number: "", email: "" });
		setIsSave(false);
		setDisplayForm("hidden");
	};

	const handleEdit = () => {
		setpersonalInfo(displayInfo);
		setIsSave(true);
		setDisplayForm("flex");
	};
	return (
		<section
			id="personal-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4"
		>
			<div
				className={
					displayForm +
					" md:flex flex-col justify-center align-middle md:mx-auto space-y-2 md:col-span-1 border-r border-black px-2"
				}
			>
				<Input
					label="Name"
					name="name"
					disabled={!isSave}
					value={personalInfo.name}
					type="text"
					onChange={handleChange}
				/>
				<Input
					label="Phone"
					name="number"
					disabled={!isSave}
					value={personalInfo.number}
					type="number"
					onChange={handleChange}
				/>
				<Input
					label="Email"
					name="email"
					disabled={!isSave}
					value={personalInfo.email}
					type="email"
					onChange={handleChange}
				/>
			</div>
			<div className="md:col-span-3 md:text-center">
				<h1>{displayInfo.name}</h1>
				<p>{displayInfo.number}</p>
				<p>{displayInfo.email}</p>
				<div>
					{isSave ? (
						<Button
							classes=" border-pink-600 "
							onClick={handleSave}
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
