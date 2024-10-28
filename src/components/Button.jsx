export function Button({ text, classes, onClick }) {
	return (
		<button
			className={classes + " border rounded-full py-2  px-20 font-bold "}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
