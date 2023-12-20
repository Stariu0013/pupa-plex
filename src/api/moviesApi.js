export const fetchAllMovies = () => {
    return fetch("https://pupa-plux-api-2.onrender.com/movies/all-movies/")
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err));
};

export const fetchMovieById = (type, id) => {
    return fetch(`https://pupa-plux-api-2.onrender.com/movies/${type}?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err));
}

export const buyTickets = (obj) => {
    return fetch("https://pupa-plux-api-2.onrender.com/movies/receipt", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(obj),
    });
};