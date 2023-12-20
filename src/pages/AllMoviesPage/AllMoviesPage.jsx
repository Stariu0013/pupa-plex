import React, {useEffect, useState} from "react";

import styles from "./AllMovies.module.css";
import {fetchAllMovies} from "../../api/moviesApi.js";
import MoviesCarousel from "../../components/MoviesCarousel/MoviesCarousel.jsx";
import SuccessBanner from "../../components/SuccessBanner/SuccessBanner.jsx";
import SeatBooking from "../../components/SeatBooking/SeatBooking.jsx";
import WeOnMap from "../../components/WeOnMap/WeOnMap.jsx";

const AllMoviesPage = () => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        fetchAllMovies().then(res => {
            const {featured, current} = res;

            setCurrentMovies(current);
            setFeaturedMovies(featured);
        });
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.descriptionBlock}>
                    <h1 className={styles.title}>
                        Завітай до нас!
                    </h1>
                    <p className={styles.subTitle}>
                        Кінотеатр "Pupa Plex" – це магічне місце, де кіно стає живим. Наша місія - дарувати незабутні емоції
                        через шедеври сучасного кіномистецтва. Зручні крісла, великий екран і потужний звук перетворюють
                        кожен фільм на захоплюючу подорож. У нас ви можете насолодитися різножанровими стрічками високої
                        якості: від захоплюючих блокбастерів до пронизливих артхаусних фільмів.
                    </p>
                </div>
            </div>
            <MoviesCarousel title="Сеанси" movies={currentMovies}/>
            <MoviesCarousel title="Скоро у кіно" movies={featuredMovies}/>
            <WeOnMap />
        </>
    );
};

export default AllMoviesPage;