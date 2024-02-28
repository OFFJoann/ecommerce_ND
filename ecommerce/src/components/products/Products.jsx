import React, { useState, useEffect } from 'react';
import { obtenerDatosDesdeAPI } from '../../services/api';
import { ProductoItem } from './Productoitem';

function Products() {
    const [datos, setDatos] = useState([]);
    /*const [images, setImages] = useState([]);*/

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { productos } = await obtenerDatosDesdeAPI();
                setDatos(productos);
            } catch (error) {
                console.error('Error al obtener datos desde la API:', error);
            }
           /* try {
                const { dataImg } = await obtenerDatosDesdeAPI();
                setImages(dataImg);
            } catch (error) {
                console.error('Error al obtener imagenes desde la API:', error);
            }*/
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {datos.map((producto) => (
                    
                    <ProductoItem
                        referencia={producto.referencia}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                    /> 
                ))}
            </div>
        </>
    );
}

export default Products;