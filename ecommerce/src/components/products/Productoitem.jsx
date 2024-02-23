import React from "react";
import { Link } from "react-router-dom";

export const ProductoItem = ({ referencia, descripcion, precio, images, id }) => {
    const addCarrito = () => {
        const productInfo = {
            referencia,
            descripcion,
            precio,
            images,
            id,
            cantidad: 1 // Puedes ajustar la cantidad según tus necesidades
        };

        // Obtén el carrito actual del localStorage o inicializa uno vacío
        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Verifica si el producto ya está en el carrito
        const existingProductIndex = currentCart.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, incrementa la cantidad
            currentCart[existingProductIndex].cantidad += 1;
        } else {
            // Si el producto no está en el carrito, agrégalo
            currentCart.push(productInfo);
        }

        // Guarda el carrito actualizado en el localStorage
        localStorage.setItem("cart", JSON.stringify(currentCart));

        console.log(`Añadido al carrito: ${referencia}`);
    };

    return (
        <div className="producto">
            <div className="producto_img">
                {/*images &&*/ <img src={"https://speedoco.vteximg.com.br/arquivos/ids/202192/vestido-de-bano-mujer-Rosado-8-1347015577-1.jpg?v=638370367747600000-2000-2000undefined"} alt="Imagen del producto" />}
            </div>
            <div className="producto_footer">
                <h1>{descripcion}</h1>
                <p>{referencia}</p>
                <p className="price">$70.000</p>
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