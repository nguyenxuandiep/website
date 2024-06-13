import React, { useState } from 'react';
import Carousel from '../DangKyNgay/Carousel/Carousel';
import DoiTuong from './DoiTuong/DoiTuong';
import HocCEH from './HocCEH/HocCEH';
import LoiThe from './LoiThe/LoiThe';
import Giatri from './Giatri/Giatri';
import GiangVien from './GiangVien/GiangVien';
export default function CEH() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'}`}>
            <Carousel />
            <DoiTuong />
            <HocCEH />
            <LoiThe />
            <Giatri />
            <GiangVien />
        </div>
    );
}
