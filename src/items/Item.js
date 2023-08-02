import React from 'react';
import star from '../assets/star.png';
import location from '../assets/placeholder.png';
import '../styles/Item.css';

const Item = ({ item }) => {
    const { brands, name, image, price, quantity } = item;

    return (
        <div className="item-card">
            <div className="item-image">
                <img src={image} alt={name} />
            </div>
            <div className="item-details">
                <div><span className="item-brand">{brands.name}</span></div>
                <span className="item-name">{name}</span>
                <div className="item-price">
                    <span className="original-price" style={{ fontSize: 20 }}>{price} đ</span>
                    <span className="discount" style={{ fontSize: 14 }}>(-42%)</span>
                </div>
                <div className="item-info">
                    <span className="rating">
                        <img src={star} alt="" width={'15px'} height={'15px'} />
                        5 <span className="sold-quantity">| Đã bán {quantity}+</span>
                    </span>

                </div>
                <div className="item-info" >
                    <img src={location} alt="" width={'15px'} height={'15px'} />
                    <span className="city" style={{ fontSize: 14 }}>Hà Nội</span>
                </div>
            </div>
        </div >
    );
};

export default Item;
