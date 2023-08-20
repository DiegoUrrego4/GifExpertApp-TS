import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { Gif } from "../interfaces";

interface Props {
	category: string;
}

export const GifGrid = ({ category }: Props) => {
	const [images, setImages] = useState<Gif[]>([]);

	useEffect(() => {
		getGifs(category)
			.then((newImages: Gif[]) => {
				setImages(newImages);
			})
			.catch((err: string) => {
				throw new Error(`${err}`);
			});
	}, [category]);

	return (
		<>
			<h3>{category}</h3>
			<ol>
				{images.map(({ id, title }) => (
					<li key={id}>{title}</li>
				))}
			</ol>
		</>
	);
};
