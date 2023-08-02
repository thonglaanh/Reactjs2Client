import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SlideShow from '../SlideShow';
import Footer from '../components/Footer';
import ItemList from '../items/ItemList';
import axios from 'axios';
import '../styles/Home.css'

const Home = () => {
    const [listCar, setListCar] = useState([]);
    const [listBrand, setListBrand] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/car/client');
                setListCar(response.data.car);
                setListBrand(response.data.brands);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (listCar) {
            const results = listCar.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [searchTerm, listCar]);

    useEffect(() => {
        if (listCar && selectedBrand !== '') {
            const filteredResults = listCar.filter((car) => car.brands._id === selectedBrand);
            setSearchResults(filteredResults);
        } else {
            setSearchResults(listCar);
        }
    }, [selectedBrand, listCar]);

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} />
            <SlideShow />

            <div className="top-section">
                <span className="top-heading">Sản phẩm hàng đầu</span>

            </div>

            <div className="item-list-container">
                <ItemList listCar={searchTerm.length > 0 ? searchResults : listCar} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
