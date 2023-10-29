import React, { useState } from 'react';
import '../styles/Register.css';
import logo from '../assets/carlogo.png'
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        // Kiểm tra mật khẩu và mật khẩu xác nhận khớp nhau
        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }
        let url = 'http://192.168.0.107:4000/account/register'
        try {
            const response = await axios.post(url, { email, password });
            alert('Đăng kí tài khoản thành công!')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-container">
            <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', marginLeft: '170px' }} />
            <h2>Đăng kí</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required placeholder="Nhập email của bạn" />
                </div>
                <div className="form-group">
                    <label>Mật khẩu:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required placeholder="Nhập mật khẩu của bạn" />
                </div>
                <div className="form-group">
                    <label>Nhập lại mật khẩu:</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required placeholder="Nhập lại mật khẩu của bạn" />
                </div>
                <button type="submit" className="btn-register">Đăng kí</button>
            </form>
            <p>
                Đã có tài khoản? <a href="/login">Đăng nhập</a>
            </p>
        </div>
    );
};

export default Register;
