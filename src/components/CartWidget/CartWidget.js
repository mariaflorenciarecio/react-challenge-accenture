import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/icons/cart.svg';
import './index.css';

const CartWidget = () => {
    const { cartLenght } = useContext(CartContext);

    return (
        <>
            <Link to='/cart' className="cart-widget group">
                <img src={cartIcon} alt="Icono del carrito" className="cart-widget__icon" />
                {cartLenght() > 0 && (
                    <span className="cart-widget__count">
                        {cartLenght()}
                    </span>
                )}
            </Link>
        </>
    );
};

export default CartWidget;