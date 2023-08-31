import './App.css';
import { useState, useEffect } from 'react';
import SearchAppBar from './components/SearchAppBar';
import { fetchApi } from './Fetch';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import DescriptionIcon from '@mui/icons-material/Description';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const App = () => {
  const [msg, setMsg] = useState(false);
  const [cidade, setCidade] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [climaData, setClimaData] = useState([]);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const cardStyle = {
    opacity: inputFocused ? 1 : 0.8,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi(cidade);
        setClimaData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setClimaData([]);
      }
      setCidade('');
      setDisabled(true);
    };

    if (msg && cidade !== '') {
      fetchData();
    }
  }, [msg, cidade]);

  return (
    <div style={cardStyle} className="clima-card">
      <SearchAppBar
        inputFocused={inputFocused}
        setInputFocused={setInputFocused}
        valueInput={cidade}
        setInput={setCidade}
        msg={msg}
        setMsg={setMsg}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <div className='text-card'>
        {!msg ? (
          <>
            <h1>Bem Vindo!</h1>
            <p>Insira sua cidade, para descobrir qual o clima atual ai!!</p>
          </>
        ) : (
          <>
            {error ? (
              <h2>Error: {error}</h2>
            ) : (
              <>
                <h1>Informações da cidade</h1>
                <ul>
                  <li><h2><LocationCityIcon />{climaData.city}</h2></li>
                  <li><p><DeviceThermostatIcon /> Temperatura: {parseFloat(climaData.weather).toFixed()}°</p></li>
                  <li><p><AcUnitIcon />Sensação Térmica: {parseFloat(climaData.temperature).toFixed()}°</p></li>
                  <li><p><AirIcon />Ventos: {climaData.wind} Km/h</p></li>
                  <li><p><DescriptionIcon />Descrição: {climaData.description}.</p></li>
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
