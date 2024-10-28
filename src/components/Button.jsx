export function Button({ text, classes, onClick }) {
	return (
		<button
			className={classes + " border rounded-full py-2 px-8"}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
