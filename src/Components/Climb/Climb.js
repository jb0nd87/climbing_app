import React from 'react';

const Climb = ({ article }) => {
	console.log(article);
	const { name, description, image } = article.fields;
	return (
		<div className='post'>
			<h2 className='title'>{name}</h2>
			{image && (
				<img
					className='image'
					src={image.fields.file.url}
					alt={name}
					title={name}
				/>
			)}
			<section>{description}</section>
		</div>
	);
};

export default Climb;
