import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonFetcher from './PokemonFetcher'; 

function App() {
  return (
    <>
      <h1>¡Conoce a tus Pokémon! </h1>
      <PokemonFetcher />
    </>
  );
}

export default App
