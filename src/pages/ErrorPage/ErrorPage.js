import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import './index.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-page__container">
                <p className="error-page__highlight">OOPS! Disculpa, página no encontrada.</p>
                <Link to="/" className="error-page__link">
                    <ArrowLeftIcon className="error-page__icon" />
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;