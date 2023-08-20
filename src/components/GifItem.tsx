interface Props {
	title: string;
	url: string;
}

export const GifItem = ({ title, url }: Props) => {
	return (
		<div className="grid__card">
			<div className="grid__card__image">
				<img src={url} alt={title} />
			</div>
			<div className="grid__card__title">
				<p>{title}</p>
			</div>
		</div>
	);
};
