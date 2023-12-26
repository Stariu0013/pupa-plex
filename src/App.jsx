import Header from "./components/Header/Header.jsx";
import "./main.css";
import {Route, Routes} from "react-router";

import AllMoviesPage from "./pages/AllMoviesPage/AllMoviesPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CurrentMoviePage from "./pages/CurrentMoviePage/CurrentMoviePage.jsx";
import {createContext, useState} from "react";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import FeatureMoviesPage from "./pages/FeatureMoviesPage/FeatureMoviesPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

export const AppContext = createContext({});

function App() {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <>
            <Header />
            <div className="content">
                <AppContext.Provider value={{ selectedSeat, setSelectedSeat, selectedMovie, setSelectedMovie }}>
                    <Routes>
                        <Route path="/" element={<AllMoviesPage />}/>
                        <Route path="/:type/:id" element={<CurrentMoviePage />}/>
                        <Route path="/feature-movies" element={<FeatureMoviesPage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/contacts" element={<ContactsPage />}/>
                    </Routes>
                </AppContext.Provider>
            </div>
            <Footer />
        </>
    )
}

export default App
