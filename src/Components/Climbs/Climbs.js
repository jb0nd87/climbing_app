import React from 'react';
import Climb from '../Climb/Climb';

const Climbs = ({ climbs }) => {
	return (
		<div>
			{climbs.map((article, index) => (
				<Climb article={article} key={index} />
			))}
		</div>
	);
};

export default Climbs;
