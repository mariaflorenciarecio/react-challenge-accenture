import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { addOrder } from '../../firebase/firebaseClient';
import { formatPrice } from "../../helpers/formatPrice";
import './index.css';

const Checkout = () => {

    const { cartItems, cartLenght, clearCart, getTotal } = useContext(CartContext);
    const [idCompra, setIdCompra] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    });
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;
    const orderDate = new Date().toLocaleDateString();

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        };
        addOrder(order).then(data => {
            setIdCompra(data);
        });
    };

    return (
        <>
            <div className="checkout__container">
                <div className="checkout__main">
                    <h1 className="checkout__title self-start mb-6">Checkout</h1>
                    <div className="flex w-full flex-col lg:flex-row justify-start items-start">
                        <div className="checkout__summary">
                            <h2 className="checkout__highlight">Resúmen</h2>
                            <div className="flex flex-col border border-black p-4 mt-6">
                                <div className="flex flex-row justify-between checkout__text">
                                    <p>Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className="flex flex-row justify-between checkout__text">
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className="flex flex-row justify-between font-semibold mt-10 checkout__highlight">
                                    <p>Total:</p>
                                    <p>{formatPrice(getTotal())}</p>
                                </div>
                            </div>
                            <Link to='/cart' className="checkout__text flex flex-row items-center mt-3">
                                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                                Volver al carrito
                            </Link>
                        </div>
                        <div className="checkout__billing">
                            <form className="checkout__form">
                                <h2 className="checkout__highlight">Detalles de facturación</h2>
                                <input
                                    className="checkout__input"
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    className="checkout__input"
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    className="checkout__input"
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                />
                                <input
                                    className="checkout__input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className="checkout__input"
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                />
                            </form>
                            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                ? (
                                    <input
                                        onClick={() => { orderHandler(); setShowModal(true) }}
                                        className="checkout__button-enabled"
                                        type="submit"
                                        value="Proceder al pago"
                                    />
                                ) : (
                                    <input
                                        className="checkout__button-disabled"
                                        type="submit"
                                        value="Proceder al pago"
                                        disabled
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${showModal ? "checkout__modal fixed" : "hidden"} checkout__modal`}>
                <div className="checkout__modal-container">
                    <h2 className="checkout__modal-text checkout__highlight">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                    <p className="checkout__modal-text checkout__text">Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una agradable experiencia en La Preuve. ¡Hasta la próxima!</p>
                    <Link to="/" className="mt-6 flex justify-center">
                        <button onClick={clearCart} className="checkout__modal-button">
                            Volver al inicio
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Checkout;
