import { api } from './@api-key';

export const fetchApi = async (query) => {
  try {
    const data = await fetch(`${api.base}weather?q=${query}&lang=pt_br&units=metric&APPID=${api.key}`);
    const clima = await data.json();
    if(data.status !== 200) {
      throw new Error(`${clima.cod}, ${clima.message}`);
    }
    return clima
  } catch (error) {
    throw error;
  }
}
