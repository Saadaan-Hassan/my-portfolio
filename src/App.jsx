import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

function Home() {
	return (
		<>
			<Hero />
			<Skills />
			<Portfolio />
			<Experience />
			<About />
			<Contact />
		</>
	);
}

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* Add other routes here */}
			</Routes>
		</Router>
	);
}

export default App;
