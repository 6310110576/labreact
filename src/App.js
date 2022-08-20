import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCart';

const word = "Hello";
function App() {
  return (
    <div className = 'body'>
      <h1 className = 'h1'>CARDGAME</h1>
      {
        <WordCard value = {word}/>
      }
    </div>
 );
}
export default App;