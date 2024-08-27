import React, { useState } from 'react';
import './index.css';

const Filter = ({ uniqueCategories = [], uniqueSizes = [], uniqueColors = [], filters, onFilterChange }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);

    const orderedCategories = ['zapatillas', 'zapatos', 'botas', 'sandalias', 'pantuflas'];
    const orderedSizes = uniqueSizes.sort((a, b) => a - b);
    const orderedColors = ['amarillo', 'negro', 'verde', 'azul', 'blanco'];

    const handleFilterClick = (filterType, value) => {
        if (filters[filterType] === value) {
            onFilterChange({ target: { name: filterType, value: '' } });
        } else {
            onFilterChange({ target: { name: filterType, value } });
        }
    };

    return (
        <div className="filter">
            <h1 className="filter__title">
                {filters.category ? filters.category : 'Productos'}
            </h1>
            <h2 className="filter__heading">Filtrar</h2>
            <div className="filter__section">
                <button
                    className="filter__toggle"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                    Categoría
                    <svg
                        className={`filter__icon ${isCategoryOpen ? 'filter__icon--open' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <div className={`filter__options ${isCategoryOpen ? 'filter__options--open' : ''}`}>
                    {orderedCategories.map(cat => (
                        <button
                            key={cat}
                            className={`filter__option ${filters.category === cat ? 'filter__option--active' : ''}`}
                            onClick={() => handleFilterClick('category', cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="filter__section">
                <button
                    className="filter__toggle"
                    onClick={() => setIsSizeOpen(!isSizeOpen)}
                >
                    Talle
                    <svg
                        className={`filter__icon ${isSizeOpen ? 'filter__icon--open' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <div className={`filter__options ${isSizeOpen ? 'filter__options--open' : ''}`}>
                    {orderedSizes.map(size => (
                        <button
                            key={size}
                            className={`filter__option ${filters.size === size.toString() ? 'filter__option--active' : ''}`}
                            onClick={() => handleFilterClick('size', size.toString())}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="filter__section">
                <button
                    className="filter__toggle"
                    onClick={() => setIsColorOpen(!isColorOpen)}
                >
                    Color
                    <svg
                        className={`filter__icon ${isColorOpen ? 'filter__icon--open' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <div className={`filter__options ${isColorOpen ? 'filter__options--open' : ''}`}>
                    {orderedColors.map(color => (
                        <button
                            key={color}
                            className={`filter__option ${filters.color === color ? 'filter__option--active' : ''}`}
                            onClick={() => handleFilterClick('color', color)}
                        >
                            {color}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;