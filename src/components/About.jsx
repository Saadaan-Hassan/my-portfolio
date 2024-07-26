import React from "react";

export default function About() {
	return (
		<section id='about' className='container mx-auto my-20 px-4 md:px-20'>
			<div className='text-center md:text-left mb-10'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold'>About</h2>
			</div>
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2 mb-10 md:mb-0 hidden md:block'>
					<div className='card mx-auto'>
						<div className='card-body font-manrope md:p-0'>
							<p className='text-2xl font-normal text-justify text-white'>
								I am a full stack developer based in Pakistan.
								<br />
								Has a Computer Science background.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-1/2'>
					<div className='card mx-auto'>
						<div className='card-body font-manrope py-0'>
							<p
								className='text-lg font-normal text-justify
							'>
								I am a full stack developer based in Pakistan looking for
								exciting opportunities. Has Computer background. Likes to focus
								on accessibility when developing. Passionate and curious about
								solving problems. Currently, I'm exploring Reactjs, Webflow and
								a bit of Designing. While I am not programming, I enjoy playing
								football, photography and playing cricket. Learning more to
								improve skill.
							</p>
							{/* <a
								href='#'
								className='mt-8 text-transparent bg-clip-text bg-gradient-to-b from-[#FBEC5D] to-[#FFC000] w-fit underline uppercase border-b-2 border-[#FFC000] font-bold text-[16px]'>
								More about me
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
