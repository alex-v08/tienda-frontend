import { getWithoutToken } from "../../helpers/fetch";

export const getById = async (id) => {
  try {
    const data = await getWithoutToken(`Productos/${id}`);
    return data;
  } catch (error) {
    window.location.href = "/notfound";
  }
};
