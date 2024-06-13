import React, { useState } from 'react';
import Carousel from '../DangKyNgay/Carousel/Carousel';
import LoiThe from '../AWS/LoiThe/LoiThe';
import GiangVien from '../AWS/GiangVien/GiangVien';
import Noidung from '../AWS/NoiDung/Noidung';
import Thongtin from '../AWS/Thongtin/Thongtin';

export default function AWS() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'}`}>
            <Carousel />
            <Thongtin />
            <LoiThe />
            <GiangVien />
            <Noidung />
        </div>
    );
}
