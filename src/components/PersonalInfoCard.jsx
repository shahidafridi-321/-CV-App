import React from "react";
import { Button } from "./Button";

export const PersonalInfoCard = ({ displayInfo,isSave,handleSave,handleEdit }) => {
	return (
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
	);
};
