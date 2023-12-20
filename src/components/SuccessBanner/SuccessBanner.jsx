import React from 'react';
import {SuccessIcon, CloseIcon} from "../../assets/imgs/index.js";

import styles from "./SuccessBanner.module.css";

const SuccessBanner = ({onClose}) => {
    return (
        <div className={styles.notification}>
            <img src={CloseIcon} alt="Close icon" onClick={onClose} className={styles.closeButton}/>
            <h1 className={styles.notificationTitle}>Оплата пройшла успішно!</h1>
            <p className={styles.notificationDescription}>На вказану пошту надійшов квиток.</p>
            <img src={SuccessIcon} alt="Icon" className={styles.notificationLogo}/>
        </div>
    );
};

export default SuccessBanner;