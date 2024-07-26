import React from "react";

export default function CustomIconButton({ link, svg, background = false }) {
	return (
		<a href={link} target='_blank' rel='noreferrer'>
			<button
				className={
					"inline-flex text-white border-0 p-2 sm:p-3 focus:outline-none rounded-full text-lg" +
					(background ? " bg-gray-800 hover:bg-gray-900" : "")
				}>
				{svg}
			</button>
		</a>
	);
}
