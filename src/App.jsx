import Header from "./components/Header/Header.jsx";
import "./main.css";
import {Route, Routes} from "react-router";

import AllMoviesPage from "./pages/AllMoviesPage/AllMoviesPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CurrentMoviePage from "./pages/CurrentMoviePage/CurrentMoviePage.jsx";
import {createContext, useState} from "react";

export const AppContext = createContext({});

function App() {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <div>
            <Header />
            <>
                <AppContext.Provider value={{ selectedSeat, setSelectedSeat, selectedMovie, setSelectedMovie }}>
                    <Routes>
                        <Route path="/" element={<AllMoviesPage />}/>
                        <Route path="/:type/:id" element={<CurrentMoviePage />}/>
                    </Routes>
                </AppContext.Provider>
            </>
            <Footer />
        </div>
    )
}

export default App
