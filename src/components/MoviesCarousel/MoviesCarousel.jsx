import React from 'react';
import Slider from "react-slick";
import MovieCarouselItem from "./MovieCarouselItem/MovieCarouselItem.jsx";

import "./style.css";
import styles from "../../pages/CurrentMoviePage/CurrentMoviePage.module.css";

const MoviesCarousel = ({movies, title}) => {
    const settings = {
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carouselContainer">
            <div className="sectionTitleBlock">{title} <div className="lineBlock"></div></div>
            <Slider {...settings}>
                {
                    [...movies, ...movies]?.map(movie => {
                        return <MovieCarouselItem title={title} movie={movie} key={movie.id}/>;
                    })
                }
            </Slider>
        </div>
    );
};

export default MoviesCarousel;