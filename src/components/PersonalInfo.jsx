import React, { useState } from "react";
import { Button } from "./Button";

export const PersonalInfo = () => {
	const [personalInfo, setpersonalInfo] = useState({
		name: "Shahid",
		number: "555 555 555",
		email: "example@gmail.com",
	});
	const [isSave, setIsSave] = useState({
		save: false,
		disabled: false,
	});

	const handleNameChange = (e) => {
		if (!isSave.save) {
			setpersonalInfo({ ...personalInfo, name: e.target.value });
		}
	};
	const handleNumberChange = (e) => {
		if (!isSave.save) {
			setpersonalInfo({ ...personalInfo, number: e.target.value });
		}
	};
	const handleEmailChange = (e) => {
		if (!isSave.save) {
			setpersonalInfo({ ...personalInfo, email: e.target.value });
		}
	};

	const handleIsSave = () => {
		setIsSave({ ...isSave, save: true, disabled: true });
	};

	const handleEdit = () => {
		setIsSave({ ...isSave, save: false, disabled: false });
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
						disabled={isSave.disabled}
						type="text"
						className="border border-red-400"
						onChange={handleNameChange}
					/>
				</label>
				<label>
					Number:{" "}
					<input
						disabled={isSave.disabled}
						type="number"
						className="border border-red-400"
						onChange={handleNumberChange}
					/>
				</label>
				<label>
					Email:{" "}
					<input
						disabled={isSave.disabled}
						type="email"
						className="border border-red-400"
						onChange={handleEmailChange}
					/>
				</label>
			</div>
			<div className="md:col-span-3 md:text-center">
				<h1>{personalInfo.name}</h1>
				<p>{personalInfo.number}</p>
				<p>{personalInfo.email}</p>
				<div>
					<Button
						classes=" border-pink-600 "
						onClick={handleIsSave}
						text="Savee"
					/>
					<Button
						classes=" border-green-600 "
						onClick={handleEdit}
						text="Edit"
					/>
				</div>
			</div>
		</section>
	);
};
