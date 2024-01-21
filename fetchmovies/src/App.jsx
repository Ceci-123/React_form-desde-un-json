/* eslint-disable react/prop-types */

//import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx' 
import { useMovies } from './hooks/useMovies.js'


function App() {
const { movies : mappedMovies } = useMovies()

  return (
    <>
     <h1>Buscador de peliculas</h1>
     <div className='page'>
      <header>
      <form className='form'>
        <label> Escribe que pelicula quieres buscar</label>
        <input type='text' placeholder='Avengers' ></input>
        <button>Buscar</button>
      </form>
      </header>
      <main> {
        <Movies movies={mappedMovies}/>
        }
       
      </main>
     </div>
    </>
  )
}

export default App
//4287ad07 api key