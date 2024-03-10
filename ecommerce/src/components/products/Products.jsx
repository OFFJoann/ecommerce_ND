import React, { useState, useEffect } from 'react';
import { obtenerDatosDesdeAPI, obtenerPrimeraImagen } from '../../services/api';
import { ProductoItem } from './Productoitem';

function Products() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { productos } = await obtenerDatosDesdeAPI();
                setDatos(productos);
            } catch (error) {
                console.error('Error al obtener datos desde la API:', error);
            }
        };

        fetchData();
    }, []);

    const [imagenes, setImagenes] = useState({});

    useEffect(() => {
        const obtenerImagenes = async () => {
            const nuevasImagenes = {};
            for (const producto of datos) {
                const imgURL = await obtenerPrimeraImagen(producto.referencia);
                nuevasImagenes[producto.referencia] = imgURL;
            }
            setImagenes(nuevasImagenes);
            console.log(imagenes)
        };

        obtenerImagenes();
    }, [datos]);

    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {datos.map((producto) => (
                    <ProductoItem
                        key={producto.referencia}
                        referencia={producto.referencia}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        imagen={imagenes[producto.referencia]}
                    />
                ))}
            </div>
        </>
    );
}

export default Products;
