import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchMovieById} from "../../api/moviesApi.js";
import Tabs from "../../components/Tabs/Tabs.jsx";

import styles from "./CurrentMoviePage.module.css";
import {bannerById, imageById} from "../../consts/moviesImage.js";
import Popup from "../../components/Popup/Popup.jsx";
import SelectTicketSection from "../../components/SelectTicketSection/SelectTicketSection.jsx";
import Button from "../../components/UI/Button/Button.jsx";

const CurrentMoviePage = () => {
    const { type, id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedHall, setSelectedHall] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        fetchMovieById(type, id).then(res => {
            setMovieData(res);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const onButtonClick = (hall, time) => {
        setSelectedHall(hall);
        setSelectedTime(time);
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            {
                isLoading
                    ? <p>Loading</p>
                    : isPopupVisible ? (
                        <Popup title={movieData.name} closePopup={closePopup}>
                            <SelectTicketSection selectedDay={selectedDay} selectedHall={selectedHall} selectedTime={selectedTime}/>
                        </Popup>
                    ) : (
                        <div className={styles.container}>
                            <div className={styles.bannerBlock}>
                                <img src={bannerById[id]} className={styles.bannerImage} alt="image"/>
                            </div>
                            <div className={styles.wrapper}>
                                <h1 className={styles.sectionTitle}>Сеанси</h1>
                                <Tabs selectedDay={selectedDay} setSelectedDay={setSelectedDay} data={movieData?.movieInfo} onButtonClick={onButtonClick}/>
                                <div className={styles.movieDetailsBlock}>
                                    <div className={styles.movieDetails}>
                                        <img src={imageById[movieData?.id]} className={styles.movieImage} alt={movieData.name}/>
                                        <div>
                                            <div className={styles.detailedInfoBlock}>
                                                <div className={styles.detailedInfoList}>
                                                    <p>Оригінальна назва:</p>
                                                    <p>Режисер:</p>
                                                    <p>Дата прем’єри:</p>
                                                    <p>Мова:</p>
                                                    <p>Жанр:</p>
                                                    <p>У головних ролях:</p>
                                                </div>
                                                <div className={[styles.detailedInfoList, styles.detailedInfoListConcreted].join(" ")}>
                                                    <p>{movieData.name}</p>
                                                    <p>{movieData.director}</p>
                                                    <p>{movieData.premiere}</p>
                                                    <p>
                                                        {
                                                            movieData.languages.map(lang => <span key={lang}>{lang}</span>)
                                                        }
                                                    </p>
                                                    <p>{movieData.genre}</p>
                                                    <p>
                                                        {
                                                            movieData.roles.length ? movieData.roles.map(role => <span key={role}>{role}</span>) : <span>-</span>
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={styles.movieDetailsBtns}>
                                                {
                                                    movieData?.genre && <Button isDark>{movieData?.genre}</Button>
                                                }
                                                {
                                                    movieData?.isForAdults && <Button isDark>18+</Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.movieDetailsDescription}>
                                        {movieData.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
};

export default CurrentMoviePage;