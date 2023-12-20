import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {LogoIcon, PhoneIcon, EmailIcon} from "../../assets/imgs/index.js";
import {subscribeToNews} from "../../api/subscribeApi.js";

import styles from "./Footer.module.css";
import Button from "../UI/Button/Button.jsx";
import Input from "../UI/Input/Input.jsx";

const Footer = () => {
    const [email, setEmail] = useState("");

    const onSendClick = () => {
        subscribeToNews(email);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img className={styles.footerLogo} src={LogoIcon} alt="App logo"/>
                <nav className={styles.footerList}>
                    <span><NavLink className={styles.navigationItem} to="/">Сеанси</NavLink></span>
                    <span><NavLink className={styles.navigationItem} to="/featured">Скоро у кіно</NavLink></span>
                    <span><NavLink className={styles.navigationItem} to="/about">Про нас</NavLink></span>
                </nav>
                <div className={styles.footerList}>
                    <p>Адреса</p>
                    <p>Двірцеве шосе, 18</p>
                    <div className={styles.iconBlock}>
                        <img src={PhoneIcon} alt="Phone icon"/>
                        <span>050 795 66 89</span>
                    </div>
                    <div className={styles.iconBlock}>
                        <img src={EmailIcon} alt="Email icon"/>
                        <p>pupa.plex@gmail.com</p>
                    </div>
                </div>
                <div className={styles.footerList}>
                    <p>Отримуй новини про знижки першим!</p>
                    <Input type="email" placeholder="email" value={email} onChange={onEmailChange}/>
                    <Button onClick={onSendClick}>Надіслати</Button>
                </div>
            </div>
            <div className={styles.footerRights}>
                &#169; {new Date().getFullYear()} Pupaplex
            </div>
        </footer>
    );
};

export default Footer;