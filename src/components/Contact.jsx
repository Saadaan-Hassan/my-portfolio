import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
	LINKEDIN_SVG,
	GITHUB_SVG,
	X_SVG,
	INSTAGRAM_SVG,
	MAIL_SVG,
	USER_SVG,
	PENCIL_SVG,
} from "../helper/icons";
import CustomIconButton from "./custom/CustomIconButton";
import CustomTextArea from "./custom/CustomTextArea";
import CustomTextField from "./custom/CustomTextField";

export default function Contact() {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		user_subject: "",
		user_message: "",
	});
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		let formErrors = {};
		if (!formData.user_name) formErrors.user_name = "Name is required";
		if (!formData.user_email) formErrors.user_email = "Email is required";
		if (!formData.user_subject) formErrors.user_subject = "Subject is required";
		if (!formData.user_message) formErrors.user_message = "Message is required";

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (formData.user_email && !emailRegex.test(formData.user_email)) {
			formErrors.user_email = "Invalid email address";
		}

		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const sendEmail = (e) => {
		e.preventDefault();
		if (validateForm()) {
			emailjs
				.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_EMAILJS_USER_ID
				)
				.then(
					(result) => {
						console.log(result.text);
						setSuccessMessage("Message sent successfully!");
						setFormData({
							user_name: "",
							user_email: "",
							user_subject: "",
							user_message: "",
						});
						setErrors({});
					},
					(error) => {
						console.log(error.text);
						setSuccessMessage("An error occurred. Please try again.");
					}
				);
		}
	};

	const links = [
		{
			link: "https://www.linkedin.com/in/Saadaan-Hassan/",
			svg: LINKEDIN_SVG,
		},
		{
			link: "https://github.com/Saadaan-Hassan/",
			svg: GITHUB_SVG,
		},
		{
			link: "https://x.com/SaadaanHassan",
			svg: X_SVG,
		},
		{
			link: "https://www.instagram.com/saadaanhassan/",
			svg: INSTAGRAM_SVG,
		},
	];

	return (
		<section id='contact' className='container mx-auto my-20 px-4 md:px-20'>
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2 flex flex-col justify-between mb-10 md:mb-0'>
					<div>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-5'>
							Let’s connect
						</h2>
						<p className='text-lg font-normal font-manrope'>
							Say hello at{" "}
							<a
								href='mailto:saadaanedu@gmail.com'
								className='w-fit text-white border-b border-[#FFC000] text-lg'>
								saadaanedu@gmail.com
							</a>
						</p>

						<p className='text-lg font-normal font-manrope'>
							For more info, here&rsquo;s my{" "}
							<a
								href='https://drive.google.com/file/d/1wZ3JY2YKwz7J4kZLsQ7h2X9lQXQ0VZ5o/view?usp=sharing'
								className='w-fit text-white uppercase border-b border-[#FFC000] text-lg'>
								CV
							</a>
						</p>

						<div className='flex space-x-2 mt-10'>
							{links.map((link, index) => (
								<CustomIconButton key={index} link={link.link} svg={link.svg} />
							))}
						</div>
					</div>

					<p className='text-sm font-normal font-manrope mt-10'>
						© {new Date().getFullYear()} Saadaan Hassan.
					</p>
				</div>
				<div className='md:w-1/2'>
					<form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
						<CustomTextField
							label='Name'
							placeholder='ABC'
							icon={USER_SVG}
							name='user_name'
							value={formData.user_name}
							onChange={handleChange}
							error={errors.user_name}
						/>
						<CustomTextField
							label='Email'
							placeholder='abc@example.com'
							icon={MAIL_SVG}
							name='user_email'
							value={formData.user_email}
							onChange={handleChange}
							error={errors.user_email}
						/>
						<CustomTextField
							label='Subject'
							placeholder='Subject'
							icon={PENCIL_SVG}
							name='user_subject'
							value={formData.user_subject}
							onChange={handleChange}
							error={errors.user_subject}
						/>
						<CustomTextArea
							label='Message'
							placeholder='Message'
							name='user_message'
							value={formData.user_message}
							onChange={handleChange}
							error={errors.user_message}
						/>
						<button
							type='submit'
							className='group inline-flex items-center space-x-2 bg-gradient-to-r text-black from-[#FBEC5D] to-[#FFC000] border-0 py-2 px-6 focus:outline-none rounded-full w-fit'>
							Send
						</button>
						{successMessage && (
							<p className='text-green-500 text-sm mt-2'>{successMessage}</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
