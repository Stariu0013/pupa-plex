import React, {useContext, useMemo, useState} from 'react';
import {imageById} from "../../consts/moviesImage.js";
import {useInput} from "../../hooks/useInput.js";
import Payment from "../Payment/Payment.jsx";
import SeatBooking from "../SeatBooking/SeatBooking.jsx";
import {useSeatBooking} from "../SeatBooking/useSeatBooking.js";
import {AppContext} from "../../App.jsx";

import styles from "./SelectTicketSection.module.css";
import Button from "../UI/Button/Button.jsx";
import {CloseIcon} from "../../assets/imgs/index.js";
import {buyTickets} from "../../api/moviesApi.js";
import SuccessBanner from "../SuccessBanner/SuccessBanner.jsx";

const SelectTicketSection = ({ closePopup, selectedTime, selectedHall, selectedDay }) => {
    const { selectedMovie } = useContext(AppContext);
    const { seats, onSeatClick, selectedSeats, removeSelectedSeat} = useSeatBooking();

    const [isSelectedSeats, setIsSelectedSeats] = useState(false);
    const [isBought, setIsBought] = useState(false);

    const {id, name} = selectedMovie;

    const nameInput = useInput("");
    const lastNameInput = useInput("");
    const emailInput = useInput("");

    const totalPrice = useMemo(() => {
        return selectedSeats.reduce((acc, val) => acc + val?.price, 0)
    }, [selectedSeats]);

    const onSelectedSeatsClick = () => {
        if (selectedSeats.length > 0) {
            setIsSelectedSeats(true);
        }
    };

    const onBuyTicketsClick = async () => {
        if (nameInput.value && lastNameInput.value && emailInput.value && selectedSeats.length) {
            const obj = {
                name: nameInput.value,
                lastname: lastNameInput.value,
                email: emailInput.value,
                seats: selectedSeats,
                price: totalPrice,
            };

            buyTickets(obj).then(() => {
                setIsBought(true);
            }).finally(() => {
                setIsBought(true);
            });
        };
    };

    const onClose = () => {
        setIsBought(false);
    }

    return isBought ? <SuccessBanner onClose={onClose}/> : (
        <div className={styles.container}>
            <div>
                <div className={styles.movieInfoBlock}>
                    <img src={imageById[id]} className={styles.image} onClick={closePopup} alt={name}/>
                    <div>
                        <p>{selectedDay}</p>
                        <p>{selectedTime}</p>
                        <p>{selectedHall}</p>
                    </div>
                </div>
                <>
                    {
                        isSelectedSeats
                            ? (
                                <Payment key="payment" emailInput={emailInput} lastNameInput={lastNameInput} nameInput={nameInput}/>
                            ) : (
                                <SeatBooking key="seatBooking" seats={seats} onSeatClick={onSeatClick}/>
                            )
                    }
                </>
            </div>
            <div className={styles.paymentBlock}>
                <div className={styles.paymentWrapper}>
                    <div className={styles.ticketsBlockTitle}>
                        <span>Квитки</span>
                        <span>{selectedSeats.length}</span>
                    </div>
                    <div className={styles.selectedSeatsBlock}>
                        {
                            selectedSeats?.map(seat => {
                                return (
                                    <div className={styles.selectedSeatItem} key={seat.id}>
                                        <span>{seat?.row} ряд</span>
                                        <span>{seat?.col} місце</span>
                                        {seat?.price}
                                        <img src={CloseIcon} alt="Close icon" onClick={() => removeSelectedSeat(seat.id)} className={styles.removeSelectedSeatButton}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={[styles.paymentWrapper, styles.priceContainer].join(" ")}>
                    <div className={styles.ticketsBlockTitle}>
                        <span>Всього до сплати</span>
                        <span>{totalPrice}</span>
                    </div>
                    {
                        isSelectedSeats
                            ? <Button onClick={onBuyTicketsClick} isFullWidth>Придбати</Button>
                            : <Button onClick={onSelectedSeatsClick} isFullWidth>Продовжити</Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectTicketSection;