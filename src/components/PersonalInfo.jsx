import React, { useState } from "react";

export const PersonalInfo = () => {
	const [personalInfo, setpersonalInfo] = useState({
		name: "",
		number: "",
		email: "",
	});

	const handleNameChange = (e) => {
		setpersonalInfo({ ...personalInfo, name: e.target.value });
	};
	const handleNumberChange = (e) => {
		setpersonalInfo({ ...personalInfo, number: e.target.value });
	};
	const handleEmailChange = (e) => {
		setpersonalInfo({ ...personalInfo, email: e.target.value });
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
						type="text"
						className="border border-red-400"
						onChange={handleNameChange}
					/>
				</label>
				<label>
					Number:{" "}
					<input
						type="number"
						className="border border-red-400"
						onChange={handleNumberChange}
					/>
				</label>
				<label>
					Email:{" "}
					<input
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
			</div>
		</section>
	);
};
