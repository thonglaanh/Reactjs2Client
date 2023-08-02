import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SlideShow from '../SlideShow';
import Footer from '../components/Footer';
import ItemList from '../items/ItemList';
import axios from 'axios';
import '../styles/Home.css'

const ListItem = () => {
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

    // Function to sort cars by name
    const sortByName = (asc) => {
        // Sắp xếp danh sách searchResults hoặc listCar theo tên
        const sortedList = [...searchResults];
        sortedList.sort((a, b) => {
            if (asc) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSearchResults(sortedList);
    };

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} />

            <div className="top-section">
                <span className="top-heading">Tất cả sản phẩm</span>
                <div className="brand-selection">
                    <label htmlFor="brand-select">Chọn brand:</label>
                    <select
                        id="brand-select"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">Tất cả</option>
                        {listBrand.map((brand) => (
                            <option value={brand._id} key={brand._id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="sort-buttons-container">
                    <button className="sort-button" onClick={() => sortByName(true)}>
                        Sắp xếp A-Z
                    </button>
                    <button className="sort-button" onClick={() => sortByName(false)}>
                        Sắp xếp Z-A
                    </button>
                </div>
            </div>

            <div className="item-list-container">
                <ItemList listCar={searchResults} />
            </div>

            <Footer />
        </div>
    );
};

export default ListItem;
