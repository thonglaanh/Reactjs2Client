
import React, { useEffect, useState } from 'react';
import image1 from './assets/banner1.webp';
import image2 from './assets/banner2.jpg';
import image3 from './assets/banner3.webp';
import image4 from './assets/banner4.webp';
import './styles/SlideShow.css'
const Slide = () => {
    const images = [image1, image2, image3];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="slide-container">
            <div className="slide">
                <img
                    src={images[currentImage]}
                    alt="Slide Image"
                    className="slide-image"
                />
            </div>
            <div className="additional-image">
                <img src={image4} alt="Additional Image" />
            </div>
        </div>
    );
};


export default Slide;
