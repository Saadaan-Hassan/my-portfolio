import React from "react";
import arrowTopRight from "../assets/icons/arrow-top-right.svg";
import mediformers from "../assets/img/mediformers.png";
import lingualink from "../assets/img/lingualink.png";
import bookify from "../assets/img/bookify.png";

const Card = ({ title, image, link }) => {
	return (
		<div className='card max-w-md bg-base-100 shadow-xl mx-auto'>
			<figure>
				<img src={image} alt={title} className='aspect-video object-contain' />
			</figure>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className='card-body flex-row justify-between items-center h-20'>
					<div className='flex flex-col-reverse'>
						<h3 className='card-title'>{title}</h3>
						<p className='card-excerpt uppercase font-extrabold text-xs'>
							Click here to visit
						</p>
					</div>
					<div className='card-actions'>
						<img src={arrowTopRight} alt='' />
					</div>
				</div>
			</a>
		</div>
	);
};

export default function Portfolio() {
	const cards = [
		{
			title: "Mediformers",
			image: mediformers,
			link: "https://mediformers.com.pk/",
		},
		{
			title: "Lingua Link",
			image: lingualink,
			link: "https://lingua-link-chi.vercel.app/",
		},
		{
			title: "Tutorify",
			image:
				"https://raw.githubusercontent.com/Saadaan-Hassan/Tutorify/main/github-social-preview.png",
			link: "https://tutorify-app.vercel.app/",
		},
		{
			title: "Bookify",
			image: bookify,
			link: "https://github.com/Saadaan-Hassan/Bookify-Frontend/",
		},
	];

	return (
		<section id='portfolio' className='container mx-auto my-20 px-4'>
			<div className='text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-center'>
				<h2>My Portfolio</h2>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</section>
	);
}
