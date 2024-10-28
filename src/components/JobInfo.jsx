import React, { useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";
import { ComponeyInfoCard } from "./ComponeyInfoCard";

export const JobInfo = () => {
	const [componeyInfo, setComponeyInfo] = useState({
		componeyName: "",
		positionTitle: "",
		responsibilities: "",
		startDate: "",
		endDate: "",
	});

	const [displayComponeyInfo, setDisplayComponeyInfo] = useState({
		componeyName: "SpaceX",
		positionTitle: "CEO",
		responsibilities: "the whole componey is mine",
		startDate: "01/12/2002",
		endDate: "05/11/2021",
	});

	const [isSave, setIsSave] = useState(false);
	const [displayForm, setDisplayForm] = useState("hidden");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setComponeyInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	function handleSave() {
		setDisplayComponeyInfo(componeyInfo);
		setComponeyInfo({
			componeyName: "",
			positionTitle: "",
			responsibilities: "",
			startDate: "",
			endDate: "",
		});

		setIsSave(false);
		setDisplayForm("hidden");
	}

	function handleEdit() {
		setComponeyInfo(displayComponeyInfo);
		setIsSave(true);
		setDisplayForm("flex");
	}
	return (
		<section
			id="job-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4 relative"
		>
			<Form displayForm={displayForm}>
				<Input
					label="Componey"
					type="text"
					name="componeyName"
					onChange={handleChange}
					value={componeyInfo.componeyName}
					disabled={!isSave}
					placeholder="Twitter"
				/>
				<Input
					label="Job Title"
					type="text"
					name="positionTitle"
					onChange={handleChange}
					value={componeyInfo.positionTitle}
					disabled={!isSave}
					placeholder="CEO"
				/>
				<div>
					<label>
						Responsibilities :{" "}
						<textarea
							className="max-w-xl"
							disabled={!isSave}
							name="responsibilities"
							placeholder="What was your resposibilities"
							onChange={handleChange}
							value={componeyInfo.responsibilities}
						></textarea>
					</label>
				</div>
				<div>
					<Input
						label="Start Date"
						type="date"
						name="startDate"
						onChange={handleChange}
						value={componeyInfo.startDate}
						disabled={!isSave}
					/>
					<Input
						label="End Date"
						type="date"
						name="endDate"
						onChange={handleChange}
						value={componeyInfo.endDate}
						disabled={!isSave}
					/>
				</div>
			</Form>

			<ComponeyInfoCard
				displayComponeyInfo={displayComponeyInfo}
				isSave={isSave}
				handleSave={handleSave}
				handleEdit={handleEdit}
			/>
		</section>
	);
};
