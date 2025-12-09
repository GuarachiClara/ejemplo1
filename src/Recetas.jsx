import './App.css'
import Card from './Card'
import Compo2 from './Compo2'
import Compo4 from './Compo4'
import { Pie } from './Pie'

export function Recetas(){
  return(
    <>
    <div className="padre">
        <div className="contenido">
           <p className="paf">Recetas</p>
           <p className="p">
            La comida es una parte esencial de la Navidad, y cada región tiene sus propios platos favoritos. Desde galletas decoradas con glaseado y jengibre, hasta pavo, cerdo, panetones y bebidas calientes como chocolate espeso o ponche navideño.
<br></br>
Lo divertido es que muchas de estas recetas no son complicadas: galletas de mantequilla con formas navideñas, cupcakes de árbol, brownies con temática de reno o trufas de chocolate son postres que cualquiera puede preparar y compartir.
<br></br>Además, cocinar en familia o con amigos se vuelve una experiencia divertida, llena de risas y pequeños momentos que quedan para siempre en la memoria.
          <div className="mu">
            <Compo4 ruta="../public/comida1.jpg" titulo="" cont=""></Compo4>
            <Compo4 ruta="../public/comida2.jpg" titulo="" cont=""></Compo4>
            <Compo4 ruta="../public/comida3.jpg" titulo="" cont=""></Compo4>
            <Compo4 ruta="../public/comida4.jpg" titulo="" cont=""></Compo4>
            <Compo4 ruta="../public/comida5.jpg" titulo="" cont=""></Compo4>
            <Compo4 ruta="../public/comida6.jpg" titulo="" cont=""></Compo4>
          </div>
           </p>
          
        </div>
        <div className="ads">
          <Compo4 ruta="../public/ads1.jpg" titulo="energizante!" cont="lo nesecita"
          ></Compo4>
        </div>
       
        <div className="pie">
            <Pie></Pie>
        </div>
    </div>
    </>
  )
} 
export default Recetas