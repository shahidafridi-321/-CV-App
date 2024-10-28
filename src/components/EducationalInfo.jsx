import React from "react";

export const EducationalInfo = () => {
	return (
		<section
			id="education-info"
			className="flex flex-col-reverse md:grid md:grid-cols-4 border border-blue-600 py-4 gap-4"
		>
			<div className="flex flex-col justify-center align-middle md:mx-auto space-y-2 md:col-span-1 border-r border-black px-2">
				<label>
					Institute Name :{" "}
					<input
						type="text"
						name="institute"
						id=""
						placeholder="University/College/School"
						className="border border-red-400"
					/>
				</label>
				<label>
					Degree Name :{" "}
					<input
						type="text"
						name="degree"
						id=""
						placeholder="PhD/MS/BS"
						className="border border-red-400"
					/>
				</label>
				<div>
					<label>
						Study Date : From{" "}
						<input
							type="date"
							name="from"
							id=""
							className="border border-red-400"
						/>{" "}
						To{" "}
						<input
							type="date"
							name=""
							id=""
							className="border border-red-400"
						/>
					</label>
				</div>
			</div>
			<div></div>
		</section>
	);
};
