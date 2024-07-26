import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const location = useLocation();

	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleClick = (id) => {
		if (location.pathname === "/") {
			handleScroll(id);
		}
	};

	return (
		<header className='body-font bg-[#0a0a0a] sticky top-0 z-50'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link
					to='/'
					className='flex font-medium items-center md:mb-0 text-xl text-white'>
					Saadaan Hassan
				</Link>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						to='/'
						className='mr-5 hover:text-yellow-400 text-white'
						onClick={() => handleClick("portfolio")}>
						Portfolio
					</Link>
					<Link
						to='/'
						className='mr-5 hover:text-yellow-400 text-white'
						onClick={() => handleClick("experience")}>
						Experience
					</Link>
					<Link
						to='/'
						className='mr-5 hover:text-yellow-400 text-white'
						onClick={() => handleClick("about")}>
						About
					</Link>
					<Link
						to='/'
						className='mr-5 hover:text-yellow-400 text-white'
						onClick={() => handleClick("contact")}>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
