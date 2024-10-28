import React from "react";

export const Form = ({ displayForm, classes = "", children ,title}) => {
	return (
		<form
			className={
				displayForm +
				" " +
				classes +
				"  font-mono  bg-white shadow-2xl rounded-xl flex-col justify-center align-middle md:flex  md:mx-auto space-y-2 md:px-9 md:py-9"
			}
		>
			<h2 className="text-center font-light text-2xl font-serif">{title}</h2>
			{children}
		</form>
	);
};
