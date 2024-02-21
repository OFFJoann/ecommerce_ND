import React from "react";
import { Link } from "react-router-dom";

export const ProductoItem = ({ referencia, descripcion, precio, images }) => {
    const addCarrito = () => {
        console.log(`Añadido al carrito: ${referencia}`);
    };

    return (
        <div className="producto">
            <div className="producto_img">
                {images && <img src={images} alt="Imagen del producto" />}
            </div>
            <div className="producto_footer">
                <h1>{descripcion}</h1>
                <p>{referencia}</p>
                <p className="price">{precio}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={addCarrito}>
                    Añadir al carrito
                </button>
                <div>
                    <Link to={`/producto/${referencia}`} className="btn">
                        Vista
                    </Link>
                </div>
            </div>
        </div>
    );
};