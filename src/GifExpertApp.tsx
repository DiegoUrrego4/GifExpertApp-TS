import { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={(value) => onAddCategory(value)} />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
