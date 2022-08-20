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
      <p>By 6310110576</p>
    </div>
 );
}
export default App;