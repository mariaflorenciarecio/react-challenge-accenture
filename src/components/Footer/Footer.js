import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="/#/help" className="footer__link">Ayuda</a>
                <a href="/#/contact" className="footer__link">Contacto</a>
                <a href="/#/terms-and-conditions" className="footer__link">Términos y condiciones</a>
                <a href="/#/privacy-policy" className="footer__link">Políticas de privacidad</a>
            </div>
        </footer>
    );
};

export default Footer;