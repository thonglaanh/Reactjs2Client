import React, { useEffect, useState } from 'react';
import '../styles/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import star from '../assets/star.png';
import location from '../assets/placeholder.png';
import img from '../assets/wtf.png';
import voicher from '../assets/voicher.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// ... (imports remain unchanged)

const ProductDetails = () => {
    const [car, setCar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/car/' + id);
                setCar(response.data.car);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    // Check if the 'car' object is defined before accessing its properties
    const carName = car?.name || '';
    const carPrice = car?.price || '';
    const carQuantity = car?.quantity || '';
    const carDescription = car?.describe || '';
    const carBrand = car?.brands?.name || '';
    const carImage = car?.image || '';
    const carBrandImage = car?.brands?.image || '';
    const carAvailableColors = car?.availableColors || [];
    const selectedColor = car?.selectColor || '';

    return (
        <div>
            <Header />

            <div className="breadcrumbs">
                <p>
                    Trang chủ &gt; Car &gt; {carBrand} &gt; {carName}
                </p>
            </div>

            <div className="details-container">
                <div className="car-image-container">
                    <img src={carImage} alt={carName} className="car-image" />
                </div>

                <div className="car-details">
                    <div className="brand-info">
                        <img src={carBrandImage} alt={carBrand} className="brand-logo" />
                        <h1 className="car-name">{carName}</h1>
                    </div>

                    <div className="car-price">
                        <span className="original-price">{carPrice} đ</span>
                        <span className="discount">-42%</span>
                    </div>

                    <div className="car-info">
                        <div className="rating">
                            <img src={star} alt="Star" className="star-icon" />
                            <span className="rating-value">4.3</span>
                        </div>
                        <div className="sold-quantity">
                            <span>Đã bán {carQuantity} +</span>
                        </div>
                        <div className="location">
                            <img src={location} alt="Location" className="location-icon" />
                            <span className="city">Ha Noi</span>
                        </div>
                    </div>

                    <div className="car-description">
                        <p>{carDescription}</p>
                    </div>

                    <div className="color-selection">
                        <h3>Available Colors:</h3>
                        <div className="color-options">
                            {carAvailableColors.map((color) => (
                                <div
                                    key={color}
                                    className={`color-option ${color === selectedColor ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="button-container">
                        <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
                        <button className="buy-now-button">Mua ngay</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;
