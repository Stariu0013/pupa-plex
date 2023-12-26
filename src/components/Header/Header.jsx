import React from "react";
import Logo from "../../assets/imgs/logo.svg";
import {NavLink, useLocation} from "react-router-dom";

import styles from './Header.module.css';
import {useNavigate, useParams} from "react-router";

const Header = () => {
    const { pathname} = useLocation();

    return (
        <header className={[styles.navigationContainer, pathname.length > 1 ? styles.navigationContainerDarken : ""].join(" ")}>
            <img className={styles.logo} src={Logo} alt="Pupa plex logo"/>

            <nav className={styles.navigation}>
                <span><NavLink className={styles.navigationItem} to="/">Сеанси</NavLink></span>
                <span><NavLink className={styles.navigationItem} to="/feature-movies">Скоро у кіно</NavLink></span>
                <span><NavLink className={styles.navigationItem} to="/about">Про нас</NavLink></span>
                <span><NavLink className={styles.navigationItem} to="/contacts">Контакти</NavLink></span>
            </nav>
        </header>
    );
};

export default Header;