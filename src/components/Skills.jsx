import React from "react";
import Slider from "react-slick";
// Import icons
import {
	FaReact,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaNodeJs,
	FaGitAlt,
	FaPython,
	FaJava,
} from "react-icons/fa";
import {
	SiTypescript,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiMysql,
	SiExpo,
	SiFirebase,
} from "react-icons/si";

function Skills() {
	const skills = [
		{ name: "React", icon: <FaReact size='100%' /> },
		{ name: "JavaScript", icon: <FaJs size='100%' /> },
		{ name: "TypeScript", icon: <SiTypescript size='100%' /> },
		{ name: "Express", icon: <SiExpress size='100%' /> },
		{ name: "Node.js", icon: <FaNodeJs size='100%' /> },
		{ name: "MongoDB", icon: <SiMongodb size='100%' /> },
		{ name: "PostgreSQL", icon: <SiPostgresql size='100%' /> },
		{ name: "MySQL", icon: <SiMysql size='100%' /> },
		{ name: "Expo", icon: <SiExpo size='100%' /> },
		{ name: "Firebase", icon: <SiFirebase size='100%' /> },
		{ name: "HTML5", icon: <FaHtml5 size='100%' /> },
		{ name: "CSS3", icon: <FaCss3Alt size='100%' /> },
		{ name: "Git", icon: <FaGitAlt size='100%' /> },
		{ name: "Python", icon: <FaPython size='100%' /> },
		{ name: "Java", icon: <FaJava size='100%' /> },
	];

	function RemoveArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "none" }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 1,
		cssEase: "linear",
		prevArrow: <RemoveArrow />,
		nextArrow: <RemoveArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className='container text-center mx-auto mt-20 md:mt-0'>
			<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-center '>
				Skills
			</h2>

			<div className='slider-container mx-auto bg-[#1A1A1A] py-12'>
				<Slider {...settings} className='h-full'>
					{skills.map((skill, index) => (
						<div key={index} className='flex justify-center items-center'>
							<div className='w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28'>
								{skill.icon}
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}

export default Skills;
