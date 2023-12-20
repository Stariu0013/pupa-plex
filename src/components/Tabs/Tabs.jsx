import React, {useEffect, useState} from 'react';
import Button from "../UI/Button/Button.jsx";

import styles from "./Tabs.module.css";

const Tabs = ({data, onButtonClick, selectedDay, setSelectedDay}) => {
    const {dates, halls} = data;

    useEffect(() => {
        setSelectedDay(dates[0]);
    }, []);

    return (
        <>
            <div className={styles.tabsBlock}>
                {
                    dates.map(date => {
                        return <span
                            key={date}
                            className={[styles.tab, selectedDay === date && styles.selected].join(" ")}
                            onClick={event => setSelectedDay(date)}
                        >
                            {date}
                        </span>
                    })
                }
            </div>
            <>
                {
                    halls.filter(hall => hall.showDate.includes(selectedDay)).map(hall => {
                        return (
                            <div key={hall.name} className={styles.tabContent}>
                                <p className={styles.tabContentTitle}>"Зала {hall.name}"</p>
                                {
                                    hall.times.map(time => {
                                        return <Button isPrimary onClick={() => onButtonClick(hall.name, time, selectedDay)} key={time}>{time}</Button>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </>
        </>
    );
};

export default Tabs;