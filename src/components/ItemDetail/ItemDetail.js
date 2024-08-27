import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../helpers/formatPrice";
import './index.css';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [isInCart, setIsInCart] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);

    const addToCart = (quantity) => {
        addItem(item, quantity);
        setIsInCart(true);
    };

    return (
        <div className="item-detail">
            <ul className="item-detail__breadcrumbs">
                <li><Link to='/' className="item-detail__back-to-home-link">Inicio</Link></li>
                <li><span>—</span></li>
                <li><Link to={`/category/${item.category}`} className="item-detail__back-to-category-link">{item.category}</Link></li>
                <li><span>—</span></li>
                <li><span className="item-detail__product">{item.name}</span></li>
            </ul>
            <div className="item-detail__container">
                <div className="item-detail__images group relative">
                    <img src={item.imgA} alt={item.name} className="item-detail__image item-detail__image--a duration-700" />
                    <img src={item.imgB} alt={item.name} className="item-detail__image item-detail__image--b absolute inset-0 opacity-0 group-hover:opacity-100 duration-700" />
                </div>
                <div className="item-detail__info">
                    <div className="item-detail__info-general">
                        <h1 className="item-detail__title">{item.name}</h1>
                        <p className="item-detail__subtitle">{formatPrice(item.price)}</p>
                    </div>
                    <p className="item-detail__text">Color: {item.color} — Talle: {item.size}</p>
                    <h2 className="item-detail__highlight mt-4">Descripción</h2>
                    <p className="item-detail__text">{item.description}</p>
                    <hr className="border-black w-full mt-4" />
                    <div className="item-detail__details-container">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="item-detail__highlight">Detalles del producto</h2>
                            <button aria-label="toggle" className="item-detail__toggle-button" onClick={() => setShowDetails(!showDetails)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={showDetails ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#030b1c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#030b1c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={`item-detail__details-content ${showDetails ? "block" : "hidden"}`}>Composición: {item.composition} — cuidados: {item.care}</p>
                    </div>
                    <hr className="border-black w-full mt-4" />
                    <div className="item-detail__benefits-container">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="item-detail__highlight">Beneficios exclusivos</h2>
                            <button aria-label="toggle" className="item-detail__toggle-button" onClick={() => setShowBenefits(!showBenefits)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={showBenefits ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#030b1c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#030b1c" strokeWidth="" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={`item-detail__benefits-content ${showBenefits ? "block" : "hidden"}`}>Envíos, cambios y devoluciones gratis — 3, 6 y 12 cuotas sin interés — Servicio pick up</p>
                    </div>
                    <hr className="border-black w-full mt-4" />
                    {isInCart ? (
                        <div className="item-detail__counter-container">
                            <Link to='/cart' className="item-detail__button">Finalizar compra</Link>
                        </div>
                    ) : (
                        <ItemCount addToCart={addToCart} stock={item.stock} />
                    )}
                    <Link to={`/category/${item.category}`} className="item-detail__back-to-category">
                        <ArrowLeftIcon className="item-detail__back-to-category-icon" />
                        Ver {item.category}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;