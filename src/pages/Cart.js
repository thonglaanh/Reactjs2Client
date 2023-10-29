import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Cart.css'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart');
                console.log(response.data);
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item._id !== productId);
        setCartItems(updatedCart);
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.cars.price), 0);

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Online Store</h1>
                <div className="cart-container">
                    <div className="product-list">
                        {cartItems.map((product) => (
                            <div key={product._id} className="product">
                                <img src={product.cars.image} alt={product.cars.name} />
                                <h3>{product.cars.name}</h3>
                                <p>Price: ${product.cars.price}</p>
                                <p>{product.cars.describe}</p>
                                <button onClick={() => removeFromCart(product._id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <h3>Total Price:</h3>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
