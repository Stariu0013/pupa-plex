export const subscribeToNews = (email) => {
    return fetch("http://localhost:8000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email})
    });
}