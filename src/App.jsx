import './App.css'
import { Route, Routes } from 'react-router-dom'
import Iniciop  from './Iniciop'
import Trad from './Trad'
import Recetas from './Recetas'
import Decoracionesp from './Decoracionesp'
import Peliculasp from './peliculasp'
import Activip from './Activp'

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="nav-link active" href="/">Navidad</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/trad">Tradiciones</a>
                    </li> 
                    <li class="nav-item">
                    <a class="nav-link" href="/recetas">Recetas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/decoraciones">Decoraciones</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/peliculas">Películas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/actividades">Actividades</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


    <Routes>
      <Route path="/" element={<Iniciop></Iniciop>}></Route>
      <Route path="/trad" element={<Trad></Trad>}></Route>
      <Route path="/recetas" element={<Recetas></Recetas>}></Route>
      <Route path="/decoraciones" element={<Decoracionesp></Decoracionesp>}></Route>
      <Route path="/peliculas" element={<Peliculasp></Peliculasp>}></Route>
      <Route path="/actividades" element={<Activip></Activip>}></Route>
    </Routes>
    </>
  )
}

export default App
