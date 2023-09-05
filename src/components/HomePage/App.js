import '../../index.css';
import * as S from './styles';
import { useState, useEffect } from 'react';
import SearchAppBar from '../SearchAppBar';
import { fetchApi } from '../Fetch';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import DescriptionIcon from '@mui/icons-material/Description';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RefreshIcon from '@mui/icons-material/Refresh';

export const App = () => {
  const [msg, setMsg] = useState(false);
  const [cidade, setCidade] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [climaData, setClimaData] = useState([]);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await fetchApi(cidade);
        setClimaData(data);
        setWeather(data.weather)
        setError(null);
      } catch (error) {
        setError(error.message);
        setMsg(false);
        setClimaData([]);
      }
      setWeather(null);
      setCidade('');
      setDisabled(true);
      setIsLoading(false)
    };

    if (msg && cidade !== '') {
      fetchData();
    }
  }, [msg, cidade]);

  return (
    <S.ContentBox $weather={weather}>
      <S.ClimaCard $inputFocused={inputFocused}>
        <SearchAppBar
          inputFocused={inputFocused}
          setInputFocused={setInputFocused}
          valueInput={cidade}
          setInput={setCidade}
          msg={msg}
          setMsg={setMsg}
          disabled={disabled}
          setDisabled={setDisabled}
          setError={setError}
        />
        <S.TextCard>
          {isLoading ? (<S.Rotate><RefreshIcon fontSize='large'/></S.Rotate>) : ''}
          {error ? ( <h2>Error: {error}</h2>) : ''}
          {!msg && !error ? (
            <>
              <h1>Bem Vindo!</h1>
              <S.PChildrenTextCard>
                Insira sua cidade, para descobrir qual o clima atual ai!!
              </S.PChildrenTextCard>
            </>
          ) : ''}
          {msg && !isLoading ? (
            <>
              <h1>Informações da cidade</h1>
              <S.UlChildrenTextCard>
                <li>
                  <h2>
                    <LocationCityIcon />
                    {climaData.city}
                  </h2>
                </li>
                <li>
                  <S.PChildrenTextCard>
                    <DeviceThermostatIcon />
                    Temperatura: {parseFloat(climaData.weather).toFixed()}°C
                  </S.PChildrenTextCard>
                </li>
                <li>
                  <S.PChildrenTextCard>
                    <AcUnitIcon />
                    Sensação Térmica: {parseFloat(climaData.temperature).toFixed()}°C
                  </S.PChildrenTextCard>
                </li>
                <li>
                  <S.PChildrenTextCard>
                    <AirIcon />
                    Ventos: {climaData.wind} Km/h
                  </S.PChildrenTextCard>
                </li>
                <li>
                  <S.PChildrenTextCard>
                    <DescriptionIcon />
                    Descrição: {climaData.description}.
                  </S.PChildrenTextCard>
                </li>
              </S.UlChildrenTextCard>
            </>
          ) : ''}
        </S.TextCard>
      </S.ClimaCard>
    </S.ContentBox>
  );
}
