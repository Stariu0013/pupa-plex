import React from 'react';

import styles from "./SeatBooking.module.css";

const SeatBooking = ({ seats, onSeatClick, }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>екран</p>

            <div className={styles.seatsContainer}>
                {
                    seats?.map(seat => {
                        return (
                            <div
                                onClick={() => {
                                    onSeatClick(seat.id);
                                }}
                                key={seat.id}
                                className={styles.seat} data-checked={seat.checked}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SeatBooking;