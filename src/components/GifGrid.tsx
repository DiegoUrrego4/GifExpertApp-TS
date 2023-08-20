import { useFetchGifs } from "../hooks";
import { GifItem } from "./GifItem";

interface Props {
	category: string;
}

export const GifGrid = ({ category }: Props) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>Cargando...</h2>}
			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
