import './App.css';
import { useState, useEffect } from 'react';
import SearchAppBar from './components/SearchAppBar';
import { fetchApi } from './Fetch';

export const App = () => {
  const [msg, setMsg] = useState(false);
  const [cidade, setCidade] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [climaData, setClimaData] = useState(null);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const cardStyle = {
    opacity: inputFocused ? 1 : 0.8,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi(cidade);
        setClimaData(data.name);
        setError(null);
      } catch (error) {
        setClimaData(null);
        setError(error.message);
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
                <h2>Nome da cidade: {climaData}</h2>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
