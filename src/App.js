import React, { useState, useCallback } from "react";

import NewsList from "./components/newsList/newsList";
import Sidebar from "./components/sidebar/sidebar.component";

import "../src/tailwind/tailwind.css";

const App = () => {
    const [category, setCategory] = useState("all");
    const [country, setCountry] = useState("kr");
    const selectCategory = useCallback((category) => setCategory(category), []);
    const selectCountry = useCallback((country) => setCountry(country), []);

    return (
        <div className="flex">
            <Sidebar
                category={category}
                selectCategory={selectCategory}
                country={country}
                selectCountry={selectCountry}
            />

            <NewsList category={category} country={country} />
        </div>
    );
};

export default App;
