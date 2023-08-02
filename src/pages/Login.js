import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/carlogo.png';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây

        if (email === '' || password === '') {
            setError('Vui lòng nhập đầy đủ thông tin.');
        } else {
            // Xử lý logic đăng nhập thành công

            // Chuyển hướng đến màn hình Home (đường dẫn '/')
            navigate('/');
        }
    };



    return (
        <div className="login-container">
            <img src={logo} alt="Logo" style={{ width: '130px', height: '70px', marginLeft: '140px' }} />
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Nhập email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu của bạn"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn-login">Đăng nhập</button>
            </form>
            <p>
                Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
        </div>
    );
};

export default Login;
