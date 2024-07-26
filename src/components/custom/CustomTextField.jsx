import React from "react";

export default function CustomTextField({
	label,
	placeholder,
	icon,
	type = "text",
	name,
	value,
	onChange,
	error,
}) {
	return (
		<label className='form-control w-full font-manrope'>
			<div className='label'>
				<span className='label-text font-medium'>{label}</span>
			</div>
			<div
				className={`input input-bordered flex items-center gap-2 ${
					error ? "border-red-500" : ""
				}`}>
				{icon}
				<input
					type={type}
					className='grow'
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
				/>
			</div>
			{error && <span className='text-red-500 text-sm'>{error}</span>}
		</label>
	);
}
