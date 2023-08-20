import "./styles.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { GifExpertApp } from "./GifExpertApp";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<GifExpertApp />
	</React.StrictMode>
);
