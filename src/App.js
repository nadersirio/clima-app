import { useState } from 'react';
import './App.css';
import { SearchAppBar } from './Modal-App-bar';

export const App = () => {
  const [ msg, setMsg ] = useState(false)
  return (
    <div className="clima-card">
      <SearchAppBar />
      <div className='text-card'>
        {!msg ? (
          <>
            <h1>Bem Vindo!</h1>
            <p>Insira sua cidade, para descobrir qual o clima atual ai!!</p>
          </>
        ) : (
          <h1>msg é true</h1>
        )}
      </div>
    </div>
  );
}
