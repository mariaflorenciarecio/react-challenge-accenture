import { useState } from 'react';
import './index.css';

const ItemCount = ({ stock, addToCart }) => {

    const [count, setCount] = useState(1);

    const addCount = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const minusCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="item-count__container">
                <div className="item-count__controls">
                    <span onClick={minusCount} className="item-count__control-button item-count__control-button--minus">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10H15.8327" stroke="#030b1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <input id="counter" aria-label="input" className="item-count__counter border-x-1" type="text" value={count} readOnly />
                    <span onClick={addCount} className="item-count__control-button item-count__control-button--plus">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.1665V15.8332" stroke="#030b1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#030b1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
            <button className="item-count__button" onClick={() => addToCart(count)}>Agregar a mi compra</button>
        </div>
    );
};

export default ItemCount;