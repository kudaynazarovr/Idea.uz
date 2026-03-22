import { useState, useEffect } from "react";
import { MyContext } from "./MyContext";

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
    };

    return (
        <MyContext.Provider value={{ cart, addToCart, theme, toggleTheme }}>
            {children}
        </MyContext.Provider>
    );
};