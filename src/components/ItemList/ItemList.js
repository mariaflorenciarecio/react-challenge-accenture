import React, { useEffect, useState } from 'react';
import { getUniqueValues, getFilteredItems } from '../../firebase/firebaseClient';
import Item from '../Item/Item';
import { Spinner } from '..';
import Filter from '../Filter/Filter';
import GridSwitcher from '../GridSwitcher/GridSwitcher';
import './index.css';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        category: '',
        size: '',
        color: ''
    });
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [uniqueSizes, setUniqueSizes] = useState([]);
    const [uniqueColors, setUniqueColors] = useState([]);
    const [columns, setColumns] = useState('grid-cols-3');

    useEffect(() => {
        const loadFilters = async () => {
            setUniqueCategories(await getUniqueValues('category'));
            setUniqueSizes(await getUniqueValues('size'));
            setUniqueColors(await getUniqueValues('color'));
        };

        loadFilters();
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const fetchedItems = await getFilteredItems(filters);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
            setLoading(false);
        };
        fetchItems();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleColumnChange = (numColumns) => {
        const columnClasses = {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
        };
        setColumns(columnClasses[numColumns] || 'grid-cols-3');
    };

    const noProducts = items.length === 0 && !loading;

    return (
        <div className="item-list">
            <div className="item-list__container">
                <Filter
                    uniqueCategories={uniqueCategories}
                    uniqueSizes={uniqueSizes}
                    uniqueColors={uniqueColors}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                />
                <div className="item-list__content">
                    {noProducts && (
                        <p className="item-list__no-products">
                            OOPS! No se encontraron productos que coincidan con tu búsqueda.
                        </p>
                    )}
                    {!noProducts && (
                        <GridSwitcher onColumnChange={handleColumnChange} />
                    )}
                    <div className={`item-list__grid ${columns}`}>
                        {loading ? (
                            <Spinner />
                        ) : (
                            items.map((item) => <Item key={item.id} item={item} />)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemList;