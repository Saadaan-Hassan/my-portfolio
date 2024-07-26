export default function CustomButton({
	label,
	svg,
	download = false,
	className,
}) {
	const downloadFile = (url, filename) => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDownload = () => {
		const fileUrl = "/Saadaan_Hassan_CV.pdf";
		const fileName = "Saadaan_Hassan_CV.pdf";
		downloadFile(fileUrl, fileName);
	};

	const handleClick = () => {
		window.location.href = "https://www.linkedin.com/in/Saadaan-Hassan/";
	};

	return (
		<button
			onClick={download ? handleDownload : handleClick}
			className={`group inline-flex items-center space-x-2 bg-gradient-to-r text-black from-[#FBEC5D] to-[#FFC000] border-0 py-2 px-4 sm:px-6 focus:outline-none rounded-full max-w-full sm:max-w-36 ${className}`}>
			<span className='text-xs sm:text-base'>{label}</span>
			{svg}
		</button>
	);
}
