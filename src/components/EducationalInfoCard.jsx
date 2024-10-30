import React from "react";
import { Button } from "./Button";

export const EducationalInfoCard = ({
	displayEduInfo,
	isSave,
	handleEdit,
	handleSave,
}) => {
	return (
		<div className=" p-4  md:flex md:flex-col md:gap-4 md:justify-start md:col-span-3 md:text-center  ">
			<h2 className="md:text-4xl  text-gray-900">{displayEduInfo.school}</h2>
			<h3 className="md:text-2xl text-gray-800">{displayEduInfo.degree}</h3>
			<div className="flex flex-col md:flex-row space-x-2 md:justify-center">
				<div className="flex space-x-1">
					<span className="italic md:text-xl text-gray-600">Start Date </span>
					<time dateTime={displayEduInfo.startDate} className="md:text-xl text-gray-600">
						{displayEduInfo.startDate}
					</time>
				</div>
				<div className="flex space-x-1">
					<span className="italic md:text-xl text-gray-600"> End Date </span>
					<time dateTime={displayEduInfo.endDate} className="text-gray-600 md:text-xl">
						{displayEduInfo.endDate}
					</time>
				</div>
			</div>
			<div>
				{isSave ? (
					<Button
						classes=" border-pink-600 font-bold hover:bg-pink-600 hover:text-white "
						onClick={handleSave}
						text="Save"
					/>
				) : (
					<Button
						classes=" border-green-600  hover:bg-green-600 hover:text-white"
						onClick={handleEdit}
						text="Edit"
					/>
				)}
			</div>
		</div>
	);
};
