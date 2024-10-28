import React, { useState } from "react";
import { Input } from "./Input";
import { Form } from "./Form";
import { EducationalInfoCard } from "./EducationalInfoCard";

export const EducationalInfo = () => {
	const [educationalInfo, setEducationalInfo] = useState({
		school: "",
		degree: "",
		startDate: "",
		endDate: "",
	});

	const [displayEduInfo, setDisplayEduInfo] = useState({
		school: "islamia",
		degree: "BS",
		startDate: "01/11/2021",
		endDate: "01/11/2025",
	});

	const [isSave, setIsSave] = useState(false);

	const [displayForm, setDisplayForm] = useState("hidden");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEducationalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleSave = () => {
		setDisplayEduInfo(educationalInfo);
		setEducationalInfo({
			school: "",
			degree: "",
			startDate: "",
			endDate: "",
		});
		setIsSave(false);
		setDisplayForm("hidden");
	};

	const handleEdit = () => {
		setEducationalInfo(displayEduInfo);
		setIsSave(true);
		setDisplayForm("flex");
	};

	return (
		<section
			id="education-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 py-4 gap-0 relative"
		>
			<Form displayForm={displayForm}>
				<>
					<Input
						label="Institute Name"
						type="text"
						name="school"
						onChange={handleChange}
						value={educationalInfo.school}
						disabled={!isSave}
						placeholder="University/College/School"
					/>
					<Input
						label="Degree Name"
						type="text"
						name="degree"
						onChange={handleChange}
						value={educationalInfo.degree}
						disabled={!isSave}
						placeholder="PhD/MS/BS"
					/>
					<div>
						<Input
							label="Start Date"
							type="date"
							name="startDate"
							onChange={handleChange}
							value={educationalInfo.startDate}
							disabled={!isSave}
							className="px-11"
						/>
						<Input
							label="End Date"
							type="date"
							name="endDate"
							onChange={handleChange}
							value={educationalInfo.endDate}
							disabled={!isSave}
							className="px-11"
						/>
					</div>
				</>
			</Form>
			<EducationalInfoCard
				displayEduInfo={displayEduInfo}
				isSave={isSave}
				handleEdit={handleEdit}
				handleSave={handleSave}
			/>
		</section>
	);
};
