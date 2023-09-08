import '../../index.css';
import * as S from './styles';
import { useState, useEffect } from 'react';
import SearchAppBar from '../SearchAppBar';
import { fetchApi } from '../Fetch';
import RefreshIcon from '@mui/icons-material/Refresh';
import { LiRender } from '../LiRender'

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
        checkWeather(data.mainWeather);
        setError(null);
      } catch (error) {
        setError(error.message);
        setMsg(false);
        setClimaData([]);
        setWeather(null);
      }
      setCidade('');
      setDisabled(true);
      setIsLoading(false)
    };

    if (msg && cidade !== '') {
      fetchData();
    }
  }, [msg, cidade]);

  const checkWeather = (mainWeather) => {
      if(mainWeather === "Haze") return setWeather("Clouds");
      return setWeather(mainWeather);
  }

  return (
    <S.ContentBox>
      <S.ClimaCard $inputFocused={inputFocused} $weather={weather}>
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
          setWeather={setWeather}
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
            <LiRender climaData={climaData}/>
          ) : ''}
        </S.TextCard>
      </S.ClimaCard>
    </S.ContentBox>
  );
}
