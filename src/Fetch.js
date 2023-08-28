import Cookies from 'js-cookie';

export const fetchApi = async (query) => {
  const api_Base = "https://api.openweathermap.org/data/2.5/";
  try {
    const data = await fetch(`${api_Base}weather?q=${query}&lang=pt_br&units=metric&APPID=${Cookies.get('key')}`);
    const clima = await data.json();
    if(data.status !== 200) {
      throw new Error(`${clima.cod}, ${clima.message}`);
    }
    return clima
  } catch (error) {
    throw error;
  }
}
