import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../App.jsx";

const maxPrice = 200;
const minPrice = 100;

export const useSeatBooking = () => {
    const {setSelectedSeat} = useContext(AppContext);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const seatsArray = Array(30).fill(0).map((el, i) => {
            return {
                id: i + 1,
                checked: false,
                price: getPrice(minPrice, maxPrice),
            }
        });

        setSeats(seatsArray);
    }, []);

    useEffect(() => {
        setSelectedSeats(seats.filter(el => el.checked));
    }, [seats]);

    const onSeatClick = (id) => {
        const newState = seats.map(el => {
            if (el.id === id) {
                el.checked = !el.checked;

                return el;
            }

            return el;
        })

        setSeats(newState);
    };

    const removeSelectedSeat = (id) => {
        setSelectedSeats(prevState => prevState.filter(el => el.id !== id));
        onSeatClick(id);
    };

    return {
        seats,
        selectedSeats,
        onSeatClick,
        removeSelectedSeat,
    }
}

const getPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}