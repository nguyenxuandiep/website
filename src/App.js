import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './page/Home';
import Slide from './components/Slide';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import NotFound from './page/404/NotFound';
import ThietKeDoHoa from './page/ThietKeDoHoa/ThietKeDoHoa';
import PhatTrienPhanMem from './page/PhatTrienPhanMem/PhatTrienPhanMem';
import AnNinhMang from './page/AnNinhMang/AnNinhMang';
import AWS from './page/AWS/AWS';
import CEH from './page/CEH/CEH';
import Carousel from './page/DangKyNgay/Carousel/Carousel';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GSheet from './page/GSheet';
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false); // State for Dark Mode

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <header id="header" style={{ backgroundColor: isDarkMode ? '#343a40' : '#ffffff' }}>
                    <Header />
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Slide />
                                <Home />
                            </>
                        }
                    />
                    <Route path="/an-ninh-mang" element={<AnNinhMang />} />
                    <Route path="/khoa-hoc-ceh" element={<CEH />} />
                    <Route path="/khoa-hoc-aws" element={<AWS />} />
                    <Route path="/dang-ky-ngay" element={<Carousel />} />
                    <Route path="/phat-trien-phan-mem" element={<PhatTrienPhanMem />} />
                    <Route path="/thiet-ke-do-hoa" element={<ThietKeDoHoa />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/gSheet" element={<GSheet />} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;
