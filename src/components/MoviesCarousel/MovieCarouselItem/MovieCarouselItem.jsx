import React, {useContext} from 'react';
import * as moviesImages from "../../../assets/imgs/index.js";
import styles from "./MovieCarouselItem.module.css";
import {useNavigate} from "react-router";
import {imageById} from "../../../consts/moviesImage.js";
import {AppContext} from "../../../App.jsx";
import Button from "../../UI/Button/Button.jsx";

const MovieCarouselItem = (props) => {
    const navigate = useNavigate();
    const { setSelectedMovie } = useContext(AppContext);

    const { movie, title } = props;
    const {name, id, premiere} = movie;

    const isCurrentMovie = title === "Сеанси";

    const onClick = () => {
        const type = isCurrentMovie ? "current-movies" : "featured-movies";

        setSelectedMovie(movie);

        navigate(`/${type}/${id}`);
    };

    return (
        <div className={styles.item} onClick={onClick}>
            <div className={styles.imageContainer}>
                <img src={imageById[id]} className={styles.itemImage} alt={name} />
                {
                    !isCurrentMovie ? <Button isPrimary isRelative>{premiere}</Button> : null
                }
            </div>
            <p className={styles.imageTitle}>{name}</p>
        </div>
    );
};

export default MovieCarouselItem;