import './App.css'
import Card from './Card'
import { Pie } from './Pie'

export function Trad(){
  return(
    <>
    <div className="padre">
        <div className="contenido paf">
          <h6>TRADICIONES</h6>  
          <p>
            Las tradiciones navideñas cambian según el país, pero todas tienen algo en común: unir a las personas. En muchos lugares se arma el árbol de Navidad con luces, esferas y adornos que cada familia guarda por años. La cena navideña es otro ritual importante, donde se comparten recetas especiales que solo aparecen una vez al año.
<br></br>
También están las costumbres como intercambiar regalos, escribir cartas para expresar deseos, decorar la casa con guirnaldas y colocar el pesebre que representa el nacimiento de Jesús. Actualmente se han sumado nuevas tradiciones, como los calendarios de adviento, los “elf on the shelf” y las decoraciones temáticas que cambian cada Navidad.
<br></br>
Cada familia, en cada país, construye su propia versión de las fiestas, y eso es lo que hace que la Navidad sea tan especial y única.
          </p>
           

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../public/nav2.jpg" class="d-block w-100 img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5> </h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../public/nav3.jpg" class="d-block w-100 img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="../public/act3.jpg" class="d-block w-100 img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
        <div className="pie">
            <Pie></Pie>
        </div>
    </div>
    </>
  )
} 
export default Trad
