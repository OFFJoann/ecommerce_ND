import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);

    const value = {
        menu : [menu, setMenu],
        carrito: [carrito, setCarrito]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}