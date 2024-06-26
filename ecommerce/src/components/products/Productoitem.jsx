import React from "react";
import { Link } from "react-router-dom";

export const ProductoItem = ({ referencia, descripcion, precio, id, imagen }) => {
    const addCarrito = () => {
        const productInfo = {
            referencia,
            descripcion,
            precio,
            imagen,
            id,
            cantidad: 1,
        };

       

        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = currentCart.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            currentCart[existingProductIndex].cantidad += 1;
        } else {
            currentCart.push(productInfo);
        }

        localStorage.setItem("cart", JSON.stringify(currentCart));
        const eventoCambioCarrito = new Event('cambioCarrito');
        window.dispatchEvent(eventoCambioCarrito);

        console.log(`Añadido al carrito: ${referencia}`);
    };

    return (
        <div className="producto">
            <div className="producto_img">
                {<img src={imagen}/>}
            </div>
            <div className="producto_footer">
                <h1>{descripcion}</h1>
                <p>{referencia}</p>
                <p className="price">$</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={addCarrito}>
                    Añadir al carrito
                </button>
                <div>
                    <Link to={`/producto/${id}`} className="btn">
                        Vista
                    </Link>
                </div>
            </div>
        </div>
    );
};