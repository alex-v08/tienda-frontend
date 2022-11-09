import { fetchWithoutToken } from "../../helpers/fetch";

export const addProduct = async (productId, amount) => {
    const data = await fetchWithoutToken("carrito", "POST", {
        clientId:1,
        productId: +productId,
        amount:amount
    });
    
    return data;
}