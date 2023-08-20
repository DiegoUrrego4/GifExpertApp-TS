import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { Gif } from "../interfaces";

interface HookResponse {
	images: Gif[];
	isLoading: boolean;
}

export const useFetchGifs = (category: string): HookResponse => {
	const [images, setImages] = useState<Gif[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifs(category)
			.then((newImages: Gif[]) => {
				setImages(newImages);
				setIsLoading(false);
			})
			.catch((err: string) => {
				throw new Error(`Error en obtención de GIFS: ${err}`);
				setIsLoading(false);
			});
	}, [category]);

	return { images, isLoading };
};
