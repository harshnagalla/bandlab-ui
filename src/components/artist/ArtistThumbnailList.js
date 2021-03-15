import ArtistItem from './ArtistItem';
import React from 'react';
import './ArtistThumbnailList.scss';

export default ({ artistList }) => {
	const renderArtistList = () =>
		artistList.map((artistItem) => <ArtistItem title={artistItem.name} image={artistItem.profileImage} />);
	return <div className="artistThumbnailList">{renderArtistList()}</div>;
};
