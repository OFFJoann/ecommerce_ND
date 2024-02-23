
/*const API_URL = "http://192.168.7.152:8080";

export const obtenerDatosDesdeAPI = async () => {
    try {
        const [productos, imagenes] = await Promise.all([
            fetch(`${API_URL}/prod`).then(response => response.json()),
            fetch(`${API_URL}/img`).then(response => response.json()),
        ]);

        const imagenesConHttps = imagenes.map(imagen => ({
            ...imagen,
            url: `https://${imagen.url}`
        }));

        const datosCombinados = productos
            .map(producto => {
                const imagenCorrespondiente = imagenesConHttps.find(imagen => imagen.id_prod === producto.row_id);

                return {
                    ...producto,
                    url: imagenCorrespondiente ? imagenCorrespondiente.url : ""
                };
            })
            .filter(producto => producto.url !== ""); // Filtra los productos sin imagen

        return datosCombinados;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};
*/



/* Logica para mostrar los productos incluso si estos no cuentan con imagenes, por favor comentariar la de arriba si se necesita */

const API_URL = "http://192.168.7.152:8080";

export const obtenerDatosDesdeAPI = async () => {
    try {
        const [productos, imagenes] = await Promise.all([
            fetch(`${API_URL}/prod`).then(response => response.json()),
            fetch(`${API_URL}/img`).then(response => response.json()),
        ]);

        const imagenesConHttps = imagenes.map(imagen => ({
            ...imagen,
            url: `https://${imagen.url}`
        }));

        const datosCombinados = productos.map(producto => {
            const imagenCorrespondiente = imagenesConHttps.find(imagen => imagen.id_prod === producto.row_id);

            return {
                ...producto,
                url: imagenCorrespondiente ? imagenCorrespondiente.url : ""
            };
        });

        return datosCombinados;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};
