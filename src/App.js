import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home, About, Events, Contacts, Whoops404, Services, CompanyHistory, Location} from "./pages";

function App() {
        return <div>
            <Routes>
                <Route  path="/" element={<Home />} />

                <Route  path="/about" element={<About />}>
                    <Route  path="/services" element={<Services />} />
                    <Route  path="/history" element={<CompanyHistory />} />
                    <Route  path="/location" element={<Location />} />
                    </Route>
                <Route  path="/events" element={<Events />} />
                <Route  path="/contacts" element={<Contacts />} />
                <Route  path="*" element={<Whoops404 />} />
            </Routes>
        </div>
}
export default App;