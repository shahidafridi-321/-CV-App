import React from "react";
import { Button } from "./Button";

export const ComponeyInfoCard = ({
	displayComponeyInfo,
	isSave,
	handleSave,
	handleEdit,
}) => {
	return (
		<div className="md:col-span-3 md:text-center">
			<p>{displayComponeyInfo.componeyName}</p>
			<p>{displayComponeyInfo.positionTitle}</p>
			<p>{displayComponeyInfo.responsibilities}</p>
			<div className="flex flex-col md:flex-row space-x-2 justify-center">
				<div className="flex space-x-1">
					<span>Start Date </span>
					<time dateTime={displayComponeyInfo.startDate}>
						{displayComponeyInfo.startDate}
					</time>
				</div>
				<div className="flex space-x-1">
					<span> End Date </span>
					<time dateTime={displayComponeyInfo.endDate}>
						{displayComponeyInfo.endDate}
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
	);
};
