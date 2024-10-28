import React, { useState } from "react";
import { Input } from "./Input";
import { Form } from "./Form";
import { PersonalInfoCard } from "./PersonalInfoCard";

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
			<Form displayForm={displayForm}>
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
			</Form>
			<PersonalInfoCard
				displayInfo={displayInfo}
				isSave={isSave}
				handleEdit={handleEdit}
				handleSave={handleSave}
			/>
		</section>
	);
};
