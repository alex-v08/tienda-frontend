import { getWithoutToken } from "../../helpers/fetch";

export const getAll = async () => {
    const data = await getWithoutToken("productos");
    return data;
}