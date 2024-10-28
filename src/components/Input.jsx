import React from "react";

export const Input = ({
	label,
	type = "text",
	name = "",
	id = "",
	onChange,
	value = "",
	disabled = false,
	placeholder = "",
	className = "",
}) => {
	return (
		<div>
			<label>
				{label} {" "}
				<input
					type={type}
					name={name}
					id={id}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					className={className + " border  border-green-400 px-3 py-2 rounded-md text-lg outline-none focus:border-blue-400"}
				/>
			</label>
		</div>
	);
};
