import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

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
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4 relative"
		>
			<div
				className={
					displayForm +
					" md:flex flex-col justify-center align-middle md:mx-auto space-y-2  border-r border-black px-2"
				}
			>
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
					/>
					<Input
						label="End Date"
						type="date"
						name="endDate"
						onChange={handleChange}
						value={educationalInfo.endDate}
						disabled={!isSave}
					/>
				</div>
			</div>
			<div className="md:col-span-3 md:text-center">
				<p>{displayEduInfo.school}</p>
				<p>{displayEduInfo.degree}</p>
				<div className="flex flex-col md:flex-row space-x-2 justify-center">
					<div className="flex space-x-1">
						<span>Start Date </span>
						<time dateTime={displayEduInfo.startDate}>
							{displayEduInfo.startDate}
						</time>
					</div>
					<div className="flex space-x-1">
						<span> End Date </span>
						<time dateTime={displayEduInfo.endDate}>
							{displayEduInfo.endDate}
						</time>
					</div>
				</div>
				<div>
					{isSave ? (
						<Button
							classes=" border-pink-600 "
							onClick={handleSave}
							text="Save"
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
			<div>
				<Button
					text="Add Education"
					classes="absolute bottom-2 right-4 border-red-900"
					onClick={() => {
						console.log("Works");
					}}
				/>
			</div>
		</section>
	);
};
