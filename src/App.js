import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCart';
const word = "Hello";
function App() {
 return (
   <div>
      {
        <WordCard value = {word}/>
      }
   </div>
 );
}
export default App;