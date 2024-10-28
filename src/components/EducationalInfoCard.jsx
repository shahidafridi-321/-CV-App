import React from 'react'
import { Button } from './Button'

export const EducationalInfoCard = ({displayEduInfo,isSave,handleEdit,handleSave}) => {
  return (
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
  )
}
