import { useEffect, useState } from 'react';

export const useViewPort = () => {
	const [device, setDevice] = useState(getDeviceWidth());

	const onResize = () => {
		setDevice(getDeviceWidth());
	};
	useEffect(() => {
		onResize();
		if (window) {
			window.addEventListener('resize', onResize);
			return () => window.removeEventListener('resize', onResize);
		}
	}, []);
	return { ...device };
};

const getDeviceWidth = () => {
	if (typeof window !== 'undefined') {
		if (window.innerWidth < 768) {
			return { deviceType: 'mobile', screenWidth: 768, currentScreenWidth: window.innerWidth };
		} else {
			return { deviceType: 'desktop', screenWidth: 1920, currentScreenWidth: window.innerWidth };
		}
	}
};
