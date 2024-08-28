import { NavLink } from 'react-router-dom';
import './index.css';

const footerLinks = [
    { to: '/help', label: 'Ayuda' },
    { to: '/contact', label: 'Contacto' },
    { to: '/terms-and-conditions', label: 'Términos y condiciones' },
    { to: '/privacy-policy', label: 'Políticas de privacidad' }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {footerLinks.map(({ to, label }) => (
                    <NavLink 
                        key={to}
                        to={to}
                        className={({ isActive }) => `footer__link ${isActive ? 'footer__link--active' : 'footer__link--inactive'}`}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </footer>
    );
};

export default Footer;