import { useState } from 'react';
import './App.css';
import { SearchAppBar } from './Modal-App-bar';

export const App = () => {
  const [ msg, setMsg ] = useState(false)
  const [inputFocused, setInputFocused] = useState(false);
  const cardStyle = {
    opacity: inputFocused ? 1 : 0.8,
  };

  return (
    <div style={cardStyle} className="clima-card">
      <SearchAppBar
        inputFocused={inputFocused}
        setInputFocused={setInputFocused}
        msg={msg}
        setMsg={setMsg}
      />
      <div className='text-card'>
        {!msg ? (
          <>
            <h1>Bem Vindo!</h1>
            <p>Insira sua cidade, para descobrir qual o clima atual ai!!</p>
          </>
        ) : (
          <h1>informações da cidade</h1>
        )}
      </div>
    </div>
  );
}
