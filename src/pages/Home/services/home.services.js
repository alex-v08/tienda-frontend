import { productos } from "../../../Mock/productos";

export const getProductos = async () => {    
    return productos.slice(0,4);
}