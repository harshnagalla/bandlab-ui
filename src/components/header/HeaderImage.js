import React from 'react';
import './HeaderImage.scss';

export default () => {
	return (
		<div className="headerImage">
			<img
				className="headerImage__image"
				src="https://www.bandlab.com/web-app/images/home/hero-7d95055881.avif"
				alt=""
			/>

			<div className="headerImage__overlay">
				<label className="headerImage__overlayHeading">Featured Artists</label>
				<label className="headerImage__overlayDescription">
					Adam Blackstone and Brian Frasier Moore discuss super bowl 2020 and more
				</label>
				<button className="headerImageOverlay__button">Read More </button>
			</div>
		</div>
	);
};
