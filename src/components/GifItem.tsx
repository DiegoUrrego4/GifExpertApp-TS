interface Props {
	title: string;
	url: string;
}

export const GifItem = ({ title, url }: Props) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
