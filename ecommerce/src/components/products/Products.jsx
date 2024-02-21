import React, { useState, useEffect } from 'react';
import { obtenerDatosDesdeAPI } from '../../services/api';
import { ProductoItem } from './Productoitem';

function Products() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerDatosDesdeAPI();
                setDatos(data);
            } catch (error) {
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {datos.map((data) => (
                    <ProductoItem
                        images={data.url}
                        referencia={data.referencia}
                        descripcion={data.descripcion}
                        precio={data.precio}
                    />
                ))}
            </div>
        </>
    );
};
export default Products;