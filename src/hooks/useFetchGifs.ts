import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { Gif } from "../interfaces";

export interface HookResponse {
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
				setIsLoading(false);
				throw new Error(`Error en obtención de GIFS: ${err}`);
			});
	}, [category]);

	return { images, isLoading };
};
