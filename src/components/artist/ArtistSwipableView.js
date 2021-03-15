import ArtistItem from './ArtistItem';
import SwipeableViews from 'react-swipeable-views';
import React from 'react';

export default ({ width, artistList }) => {
	const renderSwipableList = () =>
		artistList?.map((artistItem) => <ArtistItem title={artistItem.name} image={artistItem.profileImage} />);

	return (
		<SwipeableViews style={{ width: width }} className="creatorSwipableView" enableMouseEvents>
			{renderSwipableList()}
		</SwipeableViews>
	);
};
