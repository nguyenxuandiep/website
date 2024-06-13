import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import img3 from '../assets/images/logo-01.png';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
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
        <div style={{ backgroundColor: isDarkMode ? '#343a40' : '#ffffff' }}>
            <Navbar expand="lg" bg="body-tertiary" style={{ backgroundColor: isDarkMode ? '#343a40' : '#ffffff' }}>
                <Container style={{ backgroundColor: isDarkMode ? '#343a40' : '#ffffff' }}>
                    <Navbar.Brand href="#home">
                        <Image src={img3} style={{ height: '50%' }} />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
                                Trang chủ
                            </NavLink>
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={NavLink} to="/" className="nav-link">
                                    Ngành học
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/an-ninh-mang">
                                        An Ninh Mạng
                                    </Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/thiet-ke-do-hoa">
                                        Thiết Kế Đồ Họa
                                    </Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/phat-trien-phan-mem">
                                        Phát Triển Phần Mềm
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={NavLink} to="/" className="nav-link">
                                    Khóa ngắn hạn
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/khoa-hoc-aws">
                                        Khóa học AWS
                                    </Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/khoa-hoc-ceh">
                                        Khóa học CEH
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <NavLink
                                className="nav-link"
                                to="/dang-ky-ngay"
                                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
                            >
                                Đăng kí ngay
                            </NavLink>

                            <NavLink
                                className="nav-link"
                                to="/gSheet"
                                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
                            >
                                Dashboard
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="fixed top-20 right-2 items-center">
                    <button
                        className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} text-white flex items-center justify-center`}
                        onClick={handleToggleDarkMode}
                    >
                        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>
            </Navbar>
        </div>
    );
}
