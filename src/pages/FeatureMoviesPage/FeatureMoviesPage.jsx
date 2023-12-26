import React, {useEffect, useState} from 'react';
import MoviesCarousel from "../../components/MoviesCarousel/MoviesCarousel.jsx";
import {fetchAllMovies} from "../../api/moviesApi.js";

const FeatureMoviesPage = () => {
    const [featureMovies, setFeatureMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchAllMovies().then(res => {
            const {featured} = res;

            setFeatureMovies(featured);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {
                !isLoading && <MoviesCarousel title="Скоро у кіно" movies={featureMovies}/>
            }
        </>
    );
};

export default FeatureMoviesPage;