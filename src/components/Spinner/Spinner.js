import loader from "../../assets/loader.gif";
import './index.css'; 

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={loader} alt="Cargando..." className="spinner__image" />
        </div>
    );
};

export default Spinner;