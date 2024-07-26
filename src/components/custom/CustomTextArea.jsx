export default function CustomTextArea({
	label,
	placeholder,
	name,
	value,
	onChange,
	error,
}) {
	return (
		<label className='form-control font-manrope'>
			<div className='label'>
				<span className='label-text'>{label}</span>
			</div>
			<textarea
				className={`textarea textarea-bordered h-40 ${
					error ? "border-red-500" : ""
				}`}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}></textarea>
			{error && <span className='text-red-500 text-sm'>{error}</span>}
		</label>
	);
}
