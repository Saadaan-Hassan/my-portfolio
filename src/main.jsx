import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { analytics } from "./config/firebase.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Log page views
function logPageView() {
	if (analytics) {
		analytics.logEvent("page_view", {
			page_path: window.location.pathname + window.location.search,
		});
	}
}

// Monitor page changes for single-page applications
if (window.location.pathname) {
	logPageView();
}

window.addEventListener("popstate", logPageView);
