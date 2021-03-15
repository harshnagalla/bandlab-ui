import React from 'react';
import './DirectoryListItem.scss';

export default ({ listItem }) => {
	const { index, creators } = listItem;
	const renderCreators = () => {
		return creators.map((creator, index) => (
			<label className="directoryListItem__name" key={index}>
				{creator}
			</label>
		));
	};
	return (
		<div className="directoryListItem__container">
			<label className="directoryListItem__header">{index}</label>
			<div className="directoryListItem">{renderCreators()}</div>
		</div>
	);
};
