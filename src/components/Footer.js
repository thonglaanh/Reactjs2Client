import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';
import qr1 from '../assets/qr.png';
import qr2 from '../assets/qr2.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                <ul>
                    <li>Trung Tâm Trợ Giúp</li>
                    <li>Shopee Blog</li>
                    <li>Shopee Mall</li>
                    <li>Hướng Dẫn Mua Hàng</li>
                    <li>Hướng Dẫn Bán Hàng</li>
                    <li>Thanh Toán</li>
                    <li>Shopee Xu</li>
                    <li>Vận Chuyển</li>
                    <li>Trả Hàng & Hoàn Tiền</li>
                    <li>Chăm Sóc Khách Hàng</li>
                    <li>Chính Sách Bảo Hành</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>VỀ SHOPEE</h3>
                <ul>
                    <li>Giới Thiệu Về Shopee Việt Nam</li>
                    <li>Tuyển Dụng</li>
                    <li>Điều Khoản Shopee</li>
                    <li>Chính Sách Bảo Mật</li>
                    <li>Chính Hãng</li>
                    <li>Kênh Người Bán</li>
                    <li>Flash Sales</li>
                    <li>Chương Trình Tiếp Thị Liên Kết Shopee</li>
                    <li>Liên Hệ Với Truyền Thông</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>THEO DÕI CHÚNG TÔI TRÊN</h3>
                <div className="social-icons">
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                    <a href="https://linkedin.com"><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer-column">
                <h3>Tải ứng dụng trên điện thoại</h3>
                <div className="app-download" >
                    <img src={qr1} alt="Phone" />
                    <img src={qr2} alt="Phone" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
