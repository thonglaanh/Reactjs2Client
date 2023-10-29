import React, { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaHome, FaInfo, FaUser, FaProductHunt } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/carlogo.png';
import axios from 'axios';
const Header = ({ setSearchTerm }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchValue);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="Logo" style={{ width: '70px', height: '70px' }} />
                    <span className="logo-text">LuxCar</span>
                </a>
            </div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <button type="submit" className="search-button">
                        <FaSearch />
                    </button>
                </form>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="/" className="icon-link">
                            <FaHome />
                            <span className="icon-text">Trang chủ</span>
                        </a>
                    </li>
                    <li>
                        <a href="listItem" className="icon-link">
                            <FaProductHunt />
                            <span className="icon-text">Sản phẩm</span>
                        </a>
                    </li>
                    <li>
                        <a href="about" className="icon-link">
                            <FaInfo />
                            <span className="icon-text">Giới thiệu</span>
                        </a>
                    </li>

                    <li>
                        <a href="login" className="icon-link">
                            <FaUser />
                            <span className="icon-text">Đăng nhập/Đăng ký</span>
                        </a>
                    </li>
                    <li style={{ color: 'white', fontSize: '20px' }}>|</li>
                    <li >
                        <a href="cart" className="icon-link">
                            <FaShoppingCart size={34} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
