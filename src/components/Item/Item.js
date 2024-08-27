import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers/formatPrice';
import './index.css';

const Item = ({ item }) => {
    return (
        <div key={item.id} className="item group">
            <Link to={`/item/${item.id}`} className="item__image-container">
                <div className="item__link relative">
                    <img
                        src={item.imgA}
                        alt={item.name}
                        className="item__image item__image--a duration-700"
                    />
                    <img
                        src={item.imgB}
                        alt={item.name}
                        className="item__image item__image--b absolute inset-0 opacity-0 group-hover:opacity-100 duration-700"
                    />
                </div>
            </Link>
            <div className="item__description">
                <h3 className="item__name">
                    <Link to={`/item/${item.id}`} >
                        {item.name}
                    </Link>
                </h3>
                <p className="item__price">
                    <Link to={`/item/${item.id}`}>
                        {formatPrice(item.price)}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Item;