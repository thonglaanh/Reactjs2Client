import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import sp1 from '../assets/sp1.webp';
import '../styles/ItemList.css';
import label from '../assets/Label_Introduction.png';

const ItemList = (props) => {
    const [listCar, setlistCar] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    useEffect(() => {
        setlistCar(props.listCar)
    })


    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>

            <div className="item-grid">
                {listCar.map((item, index) => (
                    <Link to={`/detail/${item._id}`} key={index} className="link" style={{ textDecoration: 'none', color: 'inherit', }}>
                        <Item item={item} />
                    </Link>
                ))}

            </div>

            <div className="pagination">
                <button
                    className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    &lt; Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default ItemList;
