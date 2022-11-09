import { getWithoutToken } from "../../helpers/fetch";

export const getRandom = async () => {
    const data = await getWithoutToken("productos");
    return data.sort(() => .5 - Math.random()).slice(0,4);
}