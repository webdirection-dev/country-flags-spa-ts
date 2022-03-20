import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
    const [countries, setCountries] = useState<never[]>([])
    const [isPreloading, setPreloading] = useState<boolean>(true)

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={
                        <HomePage
                            countries={countries}
                            setCountries={setCountries}
                            isPreloading={isPreloading}
                            setPreloading={setPreloading}
                        />
                    } />

                    <Route path='/country-flags-spa-ts' element={
                        <HomePage
                            countries={countries}
                            setCountries={setCountries}
                            isPreloading={isPreloading}
                            setPreloading={setPreloading}
                        />
                    } />

                    <Route path='/country/:name' element={<Details />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;
