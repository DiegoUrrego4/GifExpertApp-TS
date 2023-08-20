import { useFetchGifs } from "../hooks";
import { GifItem } from "./GifItem";

interface Props {
	category: string;
}

export const GifGrid = ({ category }: Props) => {
	const { images, isLoading } = useFetchGifs(category);

	if (isLoading) {
		return <h1>Cargando ...</h1>;
	}

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
