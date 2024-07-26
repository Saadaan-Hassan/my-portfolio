import profileImg from "../assets/img/profile.svg";
import CustomIconButton from "./custom/CustomIconButton";
import { LINKEDIN_SVG, GITHUB_SVG, ARROW_TOP_RIGHT_SVG } from "../helper/icons";
import CustomButton from "./custom/CustomButton";

function Hero() {
	const links = [
		{
			link: "https://www.linkedin.com/in/Saadaan-Hassan/",
			svg: LINKEDIN_SVG,
		},
		{
			link: "https://www.github.com/Saadaan-Hassan/",
			svg: GITHUB_SVG,
		},
	];

	return (
		<section className='body-font h-screen flex items-center'>
			<div className='container flex flex-col-reverse md:flex-row px-5 md:py-10 mx-auto items-center justify-center'>
				<div className='mt-10 md:mt-0 md:w-2/5 md:pr-12 md:py-8 text-center md:text-left'>
					<h1 className='text-4xl sm:text-6xl font-medium mb-2 '>
						HI, I AM
						<br /> SAADAAN HASSAN
					</h1>
					<p className='leading-relaxed text-base font-thin'>
						A Pakistan based full stack developer passionate about building
						accessible and user friendly websites and mobile applications.
					</p>
					<div className='flex flex-row flex-wrap items-center gap-y-4 justify-center mt-4 space-x-4 md:space-y-0 md:space-x-4 md:justify-start'>
						<div className='flex gap-2 md:flex-col md:gap-4 lg:flex-row'>
							<CustomButton
								label='Contact Me'
								svg={ARROW_TOP_RIGHT_SVG}
								link={""}
							/>
							<CustomButton
								label='Download CV'
								svg={ARROW_TOP_RIGHT_SVG}
								link={""}
								download={true}
								className={"space-x-2"}
							/>
						</div>
						<div className='flex space-x-4'>
							{links.map((link, index) => (
								<CustomIconButton
									key={index}
									link={link.link}
									svg={link.svg}
									background={true}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='flex justify-end md:w-1/2 md:pl-12'>
					<img
						src={profileImg}
						alt='Profile'
						className='w-64 h-64 md:w-96 md:h-96'
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
