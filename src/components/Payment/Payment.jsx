import React from 'react';
import Input from "../UI/Input/Input.jsx";

import styles from "./Payment.module.css";
import {MasterCardIcon, PaymentCardIcon} from "../../assets/imgs/index.js";

const Payment = ({ nameInput, lastNameInput, emailInput }) => {
    return (
        <div className={styles.container}>
            <h1>Оберіть спосіб оплати</h1>
            <div>
                <label className={styles.card}>
                    <Input type="radio" name="card"/>
                    <div/>
                    <img src={PaymentCardIcon} alt="PaymentCardIcon"/>
                    <span>Платіжні картки</span>
                </label>
                <label className={styles.card}>
                    <Input type="radio" name="card"/>
                    <div/>
                    <img src={MasterCardIcon} alt="MasterCardIcon"/>
                    <span>Masterpass</span>
                </label>
            </div>
            <h1>Куди надсилати квитки</h1>
            <div className={styles.inputItemBlock}>
                <p className={styles.inputTitle}>Ім'я</p>
                <Input isTransparent type="text" {...nameInput} placeholder="Введіть ім'я"/>
            </div>
            <div className={styles.inputItemBlock}>
                <p className={styles.inputTitle}>Прізвище</p>
                <Input isTransparent type="text" {...lastNameInput} placeholder="Введіть прізвище"/>
            </div>
            <div className={styles.inputItemBlock}>
                <p className={styles.inputTitle}>Email</p>
                <Input isTransparent type="email" {...emailInput} placeholder="Введіть email"/>
            </div>

            <div className={styles.checkboxBlock}>
                <label className={[styles.label, styles.marginTop].join(" ")}>
                    <input type="checkbox" name="checkbox" />
                    <span/>
                    Я погоджуюсь з правилами та підтверджую, що ознайомлений з віковими обмеженнями на цей фільм.
                </label>
                <label className={styles.label}>
                    <input type="checkbox" name="checkbox" />
                    <span/>
                    Ознайомлений/ознайомлена, що у разі повітряної тривоги і скасуванні сеансу, квиток дійсний на аналогічний фільм у інший день і час(прохання забронювати місця у адміністратора кінотеатру).Або ж, ви можете повернути кошти за квиток, заповнивши форму на сайті.
                </label>
            </div>
        </div>
    );
};

export default Payment;