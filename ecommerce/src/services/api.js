/*ESTA LOGICA ES SI TODAS LAS IMAGENES ESTUVIERAN EN /IMG ASI SE PODRIAN COMPARAR Y SOLO SACA REF-IMG*/
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

const API_URL = "http://192.168.7.152:8080";

export const obtenerDatosDesdeAPI = async () => {
    try {
        // Realizar la solicitud para obtener la lista de productos
        const productosResponse = await fetch(`${API_URL}/prod`);
        const productos = await productosResponse.json();


       /* const referencias = productos.map(data_producto => ({ "referencia": data_producto.referencia }));

        console.log(referencias)*/

        const URL_convinada = `${API_URL}/img/`+ (productos.map(data_producto => (data_producto.referencia)));
        /*const responseImg = await fetch(URL_convinada);
        const dataImg = await responseImg.json();*/
        console.log(URL_convinada)


/*

        const ImagenProducto = ({ dataImg }) => {
            // Verificar que haya al menos una imagen en el array
            if (dataImg && dataImg.length > 0) {
                // Extraer la primera imagen del array
                const primeraImagen = dataImg[0].replace(/"/g, ''); // Eliminar las comillas
        
                return (
                    <img src={primeraImagen} alt="Imagen del producto" />
                );
            }
        
            // Renderizar algo si no hay imágenes
            return <p>No hay imágenes disponibles</p>;
        };
*/



        /*const datosConvinados = { productos };*/

        // Devolver ambos valores como un objeto
        return { productos };
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};