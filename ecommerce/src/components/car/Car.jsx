import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Car = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = useState([]);


    const tooglefalse = () => {
        setMenu(false);
    };

   /* useEffect(() => {
        // Obtiene el carrito almacenado en el localStorage al cargar el componente
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []); */

    window.addEventListener('cambioCarrito', function () {
        // Lógica para actualizar la interfaz basada en el contenido del localStorage
        actualizarInterfaz();
    });
    
    // Función para actualizar la interfaz del carrito
    function actualizarInterfaz() {
        // Obtener el carrito desde localStorage
        const carrito = JSON.parse(localStorage.getItem('cart'));
    
        // Lógica para actualizar la interfaz con el contenido del carrito
        // ...
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito__center">
                    {cart.map(item => (
                        <div className="carrito__item" key={item.id}>
                            {/* Mostrar información del producto en el carrito */}
                            <img src={"https://speedoco.vteximg.com.br/arquivos/ids/202192/vestido-de-bano-mujer-Rosado-8-1347015577-1.jpg?v=638370367747600000-2000-2000undefined"} alt="" />
                            <div>
                                <h3>{item.descripcion}</h3>
                                <p className="refe">{item.referencia}</p>
                                <p className="price">$ 70.000</p>
                            </div>
                            <div>
                                {/* Agregar funcionalidad para aumentar o disminuir la cantidad */}
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cantidad" >{item.cantidad}</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className="remove__item">
                                {/* Agregar funcionalidad para remover el producto del carrito */}
                                <box-icon name="trash"></box-icon>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${cart.reduce((total, item) => total + (item.cantidad || 0), 0)}</h3>
                    <button className="btn">Realizar pedido</button >
                </div>
            </div>
        </div>
    );
};
