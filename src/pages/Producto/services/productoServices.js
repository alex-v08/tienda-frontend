import { productos } from "../../../assets/Mock/productos";

export const getProducto = async (id) => {
    let producto = await productos.find((producto) => producto.id == id);    

    if(!producto)
        window.location.href = "/notfound";
    
    return producto;
}