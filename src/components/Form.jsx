import React from "react";

export const Form = ({ displayForm, children }) => {
	return (
		<form
			className={
				displayForm +
				" md:flex flex-col justify-center align-middle md:mx-auto space-y-2  border-r border-black px-2"
			}
		>
			{children}
		</form>
	);
};
