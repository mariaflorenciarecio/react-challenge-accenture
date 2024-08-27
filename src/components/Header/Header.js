import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.svg';
import search from '../../assets/icons/search.svg';
import account from '../../assets/icons/account.svg';
import toggle from '../../assets/icons/toggle.svg';
import searchMobile from '../../assets/icons/search-mobile.svg';
import accountMobile from '../../assets/icons/account-mobile.svg';
import './index.css';

const navLinks = [
    { to: '/', label: 'Sale' },
    { to: 'e-shop', label: 'E-shop' },
    { to: 'lookbook', label: 'Lookbook' },
    { to: 'campaign', label: 'Campaña' },
    { to: 'stores', label: 'Locales' }
];

const NavItem = ({ to, label }) => (
    <li className="header__links-item">
        <NavLink
            to={to}
            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : 'header__link--inactive'}`}
        >
            {label}
        </NavLink>
    </li>
);

const MobileMenu = ({ showMenu, navLinks }) => (
    <div className={`mobile-menu ${showMenu ? 'mobile-menu--visible' : 'mobile-menu--hidden'}`}>
        <div className="mobile-menu__container">
            <ul className="mobile-menu__links-list">
                <li className="mobile-menu__search">
                    <div className="mobile-menu__search-box">
                        <img src={searchMobile} alt="Search icon" className="mobile-menu__search-icon" />
                        <input
                            type="text"
                            placeholder="Buscador"
                            className="mobile-menu__search-input"
                        />
                    </div>
                </li>
                {navLinks.map(({ to, label }) => (
                    <li key={to} className="mobile-menu__links-item">
                        <NavLink
                            to={to}
                            className={({ isActive }) => `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : 'mobile-menu__link--inactive'}`}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
                <li className="mobile-menu__account">
                    <Link to='account' className="mobile-menu__account-link">
                        <img src={accountMobile} alt="Account icon" className="mobile-menu__account-icon" />
                        Mi cuenta
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <button
                        aria-label="open close menu"
                        onClick={() => setShowMenu(!showMenu)}
                        className="header__toggle"
                    >
                        <img src={toggle} alt="Toggle menu" className="header__toggle-icon" />
                    </button>
                    <Link to='/' className="header__logo">
                        <img src={logo} alt="Brand logo" className="header__logo-img" />
                    </Link>
                    <div className="header__icons">
                        <Link to='search' className="header__icon header__icon--search">
                            <img src={search} alt="Search icon" className="header__icon-img" />
                        </Link>
                        <Link to='account' className="header__icon header__icon--account">
                            <img src={account} alt="Account icon" className="header__icon-img" />
                        </Link>
                        <CartWidget />
                    </div>
                </div>
                <nav className="header__links">
                    <ul className="header__links-list">
                        {navLinks.map(({ to, label }) => (
                            <NavItem key={to} to={to} label={label} />
                        ))}
                    </ul>
                </nav>
            </div>
            <MobileMenu showMenu={showMenu} navLinks={navLinks} />
        </header>
    );
};

export default Header;