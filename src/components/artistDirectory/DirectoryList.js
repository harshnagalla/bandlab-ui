import React from 'react';
import DirectoryListItem from './DirectoryListItem';
import './DirectoryList.scss';

export default ({ directoryList }) => {
	const renderList = () => {
		return directoryList.map((listItem, index) => <DirectoryListItem listItem={listItem} key={index} />);
	};
	return <div className="directoryList">{renderList()}</div>;
};
