import React from "react";

const Card = ({ title, excerpt, date, company }) => {
	return (
		<div className='card mx-auto'>
			<div className='card-body font-manrope pt-0 mb-10'>
				<div className='flex justify-between items-center'>
					<h3 className='card-title text-2xl text-white'>{title}</h3>
					<p className='card-excerpt text-right text-lg'>{date}</p>
				</div>
				<p className='card-excerpt font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#FBEC5D] to-[#FFC000]'>
					{company}
				</p>

				<p className='text-lg font-normal text-justify mt-2'>{excerpt}</p>
			</div>
		</div>
	);
};

export default function Experience() {
	const cards = [
		{
			title: "Full Stack Developer",
			company: "Infinity Wave Inc.",
			date: "July 2024 - Present",
			excerpt:
				"Lead the team in developing a web application for the company using React.js, Node.js, and MongoDB, showcasing ability to work in a team and manage a project from start to finish",
		},
		{
			title: "Web Development Intern",
			company: "BehinDev",
			date: "Apr 2024 - May 2024",
			excerpt:
				"Developed a chat application called Lingua Link using React.js, Firebase, and TailwindCSS, showcasing ability to integrate modern web development technologies and frameworks",
		},
	];

	return (
		<section id='experience' className='container mx-auto my-20 px-4 md:px-20'>
			<div className='text-center md:text-left mb-10'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
					Experience
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</section>
	);
}
