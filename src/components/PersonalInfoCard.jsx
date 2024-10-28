import React from "react";
import { Button } from "./Button";

export const PersonalInfoCard = ({
	displayInfo,
	isSave,
	handleSave,
	handleEdit,
}) => {
	return (
		<div className=" md:flex md:flex-col md:justify-between md:col-span-3 md:text-center bg-gray-200 p-4">
			<h1 className="md:text-8xl">{displayInfo.name}</h1>
			<div className="flex justify-center space-x-6">
				<p className="text-gray-900 text-2xl">{displayInfo.number}</p>
				<p className="text-gray-900 text-2xl">{displayInfo.email}</p>
			</div>
			<div>
				{isSave ? (
					<Button
						classes=" border-pink-600  font-bold hover:bg-pink-600 hover:text-white  "
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
