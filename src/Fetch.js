import Cookies from 'js-cookie';

export const fetchApi = async (query) => {
  const api_Base = "https://api.openweathermap.org/data/2.5/";
  try {
    const data = await fetch(`${api_Base}weather?q=${query}&lang=pt_br&units=metric&APPID=${Cookies.get('key')}`);
    const res = await data.json();
    if(data.status !== 200) {
      throw new Error(data.status === 401 ? `${data.status}, Por favor, insira sua Key, para inspecionar o clima.` : `${data.status}, Esta cidade não foi encontrada.`);
    }

    const clima = {
      'city': res.name,
      'weather': res.main.temp,
      'temperature': res.weather.feels_like,
      'wind': res.wind,
    }
    return clima;
  } catch (error) {
    throw error;
  }
}
