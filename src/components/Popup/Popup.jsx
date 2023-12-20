import React from 'react';
import {BackArrowIcon} from "../../assets/imgs/index.js";

import styles from "./Popup.module.css";

const Popup = ({title, closePopup, children}) => {
    return (
        <div className={styles.notification}>
            <div className={styles.popupHeader}>
                <img src={BackArrowIcon} onClick={closePopup} className={styles.popupBackButton} alt="BackArrowIcon"/>
                <p className={styles.popupTitle}>{title}</p>
            </div>
            <div className={styles.popupContent}>
                {children}
            </div>
        </div>
    );
};

export default Popup;