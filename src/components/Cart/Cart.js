import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../helpers/formatPrice";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import './index.css';

const Cart = () => {
    const { cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal } = useContext(CartContext);

    return (
        <>
            {cartLenght() === 0 ? (
                <div className="cart cart--empty">
                    <div className="cart__message">
                        <p className="cart__message-text">OOPS! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
                        <Link to="/" className="cart__back-link">
                            <ArrowLeftIcon className="cart__back-icon" />
                            Volver al inicio
                        </Link>
                    </div>

                </div>
            ) : (
                <div className="cart cart--filled">
                    <div className="cart__container">
                        <h1 className="cart__title">Carrito</h1>
                        <table className="cart__table">
                            <thead className="cart__table-header">
                                <tr className="cart__table-row">
                                    <th className="cart__table-header-item cart__table-header-item--product">Producto</th>
                                    <th className="cart__table-header-item">Precio</th>
                                    <th className="cart__table-header-item">Cantidad</th>
                                    <th className="cart__table-header-item">Subtotal</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody className="cart__table-body">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="cart__table-row">
                                        <th className="cart__table-item cart__table-item--product">
                                            <img className="cart__product-image" src={item.imgA} alt={item.name} />
                                            <div className="cart__product-details">
                                                <p className="cart__product-name">{item.name}</p>
                                                <p className="cart__product-info">{item.color} — {item.size}</p>
                                            </div>
                                        </th>
                                        <th className="cart__table-item">{formatPrice(item.price)}</th>
                                        <th className="cart__table-item">{item.quantity}</th>
                                        <th className="cart__table-item">{formatPrice(getSubtotal(item.price, item.quantity))}</th>
                                        <th>
                                            <TrashIcon onClick={() => removeItem(item.id)} className="cart__remove-icon" />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="cart__details">
                            <button onClick={clearCart} className="cart__clear-button">Vaciar carrito</button>
                            <div className="cart__summary">
                                <div className="cart__summary-item">
                                    <p>Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className="cart__summary-item">
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className="cart__summary-total">
                                    <p>Total:</p>
                                    <p>{formatPrice(getTotal())}</p>
                                </div>
                                <Link to="/checkout" className="cart__checkout-button">Checkout</Link>
                                <Link to="/" className="cart__continue-shopping">
                                    <ArrowLeftIcon className="cart__continue-icon" />
                                    Seguir comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;