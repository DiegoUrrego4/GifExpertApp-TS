import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);
	const existingCategories = categories.map((category) => category.toLowerCase());

	const onAddCategory = (newCategory: string): void => {
		if (existingCategories.includes(newCategory.toLowerCase())) {
			return;
		}
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<header>
				<h1>Gif Expert App</h1>
			</header>
			<section className="search">
				<AddCategory onNewCategory={(value) => onAddCategory(value)} />
			</section>
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
