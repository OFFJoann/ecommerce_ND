const apiUrl = 'http://192.168.7.152:8080';


export const obtenerDatosDesdeAPI = async () => {
  try {
    const productosResponse = await fetch(`${apiUrl}/prod`);
    const productos = await productosResponse.json();
    return {productos};
  } catch (error) {
    console.error('Error al obtener información de referencias:', error);
    throw error;
  }
};

export const obtenerPrimeraImagen = async (referencia) => {
  try {
    const response = await fetch(`${apiUrl}/img/${referencia}`);
    const imgUrls = await response.json();
    if (imgUrls && imgUrls.length > 0) {
      return imgUrls[0].replace(/"/g, ''); 
    }
    return null;
  } catch (error) {
    console.error('Error al obtener la primera imagen:', error);
    throw error;
  }
};