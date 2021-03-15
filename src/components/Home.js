import React from 'react';
import './Home.scss';
import CreatorThumbnailList from './artist/ArtistThumbnailList';
import CreatorSwipableView from './artist/ArtistSwipableView';
import DirectoryList from './artistDirectory/DirectoryList';
import { useViewPort } from '../hooks/useViewPort';
import HeaderImage from './header/HeaderImage';
import mockArtistList from '../mockData/mockArtistList';
import mockArtistDirectory from '../mockData/mockArtistDirectory';

function Home() {
	const currentScreenWidth = useViewPort().currentScreenWidth;
	const currentScreenType = useViewPort().deviceType;

	const renderArtistSection = () => {
		return currentScreenType === 'mobile' ? (
			<CreatorSwipableView width={currentScreenWidth} artistList={mockArtistList} />
		) : (
			<CreatorThumbnailList artistList={mockArtistList} />
		);
	};
	return (
		<div className="home">
			<div className="home__container">
				<HeaderImage />
				<label className="home__hashtag">{'#monocreators #goplay'}</label>
				{renderArtistSection()}
				<DirectoryList directoryList={mockArtistDirectory} />
			</div>
		</div>
	);
}

export default Home;
