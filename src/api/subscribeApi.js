export const subscribeToNews = (email) => {
    return fetch("https://pupa-plux-api-2.onrender.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email})
    });
}