import React, { useState } from 'react';
import Carousel from '../DangKyNgay/Carousel/Carousel';

import DiemVuotTroi from './DiemVuotTroi/DiemVuotTroi';
import Lotrinh from './LoTrinh/LoTrinh';
import NoiDung from './NoiDung/NoiDung';
export default function PhatTrienPhanMem() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className={`${isDarkMode ? 'dark' : 'light'}`}>
            <Carousel />
            <DiemVuotTroi />
            <Lotrinh />
            <NoiDung />
        </div>
    );
}
