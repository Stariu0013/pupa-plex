export const fetchAllMovies = () => {
    return fetch("http://localhost:8000/movies/all-movies/")
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err));
};

export const fetchMovieById = (type, id) => {
    return fetch(`http://localhost:8000/movies/${type}?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err));
}

// export const buyTickets = (obj) => {
//     return fetch("http://localhost:8000/movies/receipt", {
//         headers: { "Content-Type": "application/json" },
//         method: "POST",
//         body: JSON.stringify(obj),
//     });
// };