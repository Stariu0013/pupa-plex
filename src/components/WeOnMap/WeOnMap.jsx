import React from 'react';

import styles from "./WeOnMap.module.css";

const WeOnMap = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.sectionTitle}>Ми на карті</h1>
            <div className={styles.mapImageBlock}>
                <div className={styles.mapAddressBlock}>
                    <p className={styles.mapAddressTitle}>Адреса:</p>
                    <p className={styles.mapAddressDescription}>
                        м. Алупка <br/>
                        Двірцеве шосе, 18 <br/>
                        блок. 5 <br/>
                        <span className={styles.underlinedText}>98676</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeOnMap;