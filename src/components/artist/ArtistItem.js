import React from 'react';
import './ArtistItem.scss';

export default ({ title, image }) => {
	return (
		<div className="artistItem">
			<img src={image} alt="" />
			<div className="artistItem__name">{title}</div>
		</div>
	);
};
