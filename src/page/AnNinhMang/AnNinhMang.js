import React, { useState } from 'react';
import Carousel from '../DangKyNgay/Carousel/Carousel';
import NoiDung from '../AnNinhMang/NoiDung/NoiDung';
import DiemVuotTroi from '../AnNinhMang/DiemVuotTroi/DiemVuotTroi';
import Lotrinh from '../AnNinhMang/LoTrinh/LoTrinh';

export default function AnNinhMang() {
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
