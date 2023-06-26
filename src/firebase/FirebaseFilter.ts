import firebase from './FirebaseConfig';

// Ejemplo de consulta para buscar productos por filtros
const buscarProductos = async (precioMin, precioMax, categoria) => {
  try {
    // Crea una referencia a la colección de productos
    const productosRef = firebase.firestore().collection('productos');

    // Crea una consulta con los filtros deseados
    let consulta = productosRef;

    // Aplica el filtro de precio mínimo si está definido
    if (precioMin !== null) {
      consulta = consulta.where('precio', '>=', precioMin);
    }

    // Aplica el filtro de precio máximo si está definido
    if (precioMax !== null) {
      consulta = consulta.where('precio', '<=', precioMax);
    }

    // Aplica el filtro de categoría si está definido
    if (categoria) {
      consulta = consulta.where('categoria', '==', categoria);
    }

    // Realiza la consulta para obtener los productos filtrados
    const productosSnapshot = await consulta.get();

    // Recorre los documentos obtenidos
    productosSnapshot.forEach((productoDoc) => {
      const productoData = productoDoc.data();
      // Haz algo con los datos del producto
    });
  } catch (error) {
    // Manejo de errores
  }
};

// Llamada a la función de ejemplo pasando los filtros deseados
buscarProductos(10, 50, 'electrónica');
