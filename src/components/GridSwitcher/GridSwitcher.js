import React, { useState, useEffect } from 'react';
import './index.css';

const GridSwitcher = ({ onColumnChange }) => {
    const [columns, setColumns] = useState('grid-cols-3');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setColumns('grid-cols-1');
            } else {
                setColumns('grid-cols-3');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        onColumnChange(parseInt(columns.split('-')[2]));
    }, [columns, onColumnChange]);

    const handleColumnChange = (numColumns) => {
        switch (numColumns) {
            case 1:
                setColumns('grid-cols-1');
                break;
            case 2:
                setColumns('grid-cols-2');
                break;
            case 3:
                setColumns('grid-cols-3');
                break;
            case 4:
                setColumns('grid-cols-4');
                break;
            default:
                setColumns('grid-cols-3');
        }
    };

    return (
        <div className="grid-switcher">
            <div className="grid-switcher__mobile">
                <button
                    onClick={() => handleColumnChange(1)}
                    className={`grid-switcher__button ${columns === 'grid-cols-1' ? 'grid-switcher__button--active' : 'grid-switcher__button--inactive'}`}
                >
                    l
                </button>
                <button
                    onClick={() => handleColumnChange(2)}
                    className={`grid-switcher__button ${columns === 'grid-cols-2' ? 'grid-switcher__button--active' : 'grid-switcher__button--inactive'}`}
                >
                    ll
                </button>
            </div>
            <div className="grid-switcher__desktop">
                <button
                    onClick={() => handleColumnChange(2)}
                    className={`grid-switcher__button ${columns === 'grid-cols-2' ? 'grid-switcher__button--active' : 'grid-switcher__button--inactive'}`}
                >
                    ll
                </button>
                <button
                    onClick={() => handleColumnChange(3)}
                    className={`grid-switcher__button ${columns === 'grid-cols-3' ? 'grid-switcher__button--active' : 'grid-switcher__button--inactive'}`}
                >
                    lll
                </button>
                <button
                    onClick={() => handleColumnChange(4)}
                    className={`grid-switcher__button ${columns === 'grid-cols-4' ? 'grid-switcher__button--active' : 'grid-switcher__button--inactive'}`}
                >
                    llll
                </button>
            </div>
        </div>
    );
};

export default GridSwitcher;