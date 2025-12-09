import Acordion from './Acordion'
import './App.css'
import { Pie } from './Pie'

export function Peliculasp(){
  return(
    <>
    <div className="padre">
        <div className="contenido">
            peli     
            <p className="p">
            Las películas de Navidad son un clásico obligatorio porque mezclan humor, magia, nostalgia y aventuras. Algunas cuentan historias sobre Santa, otras sobre familias, y muchas nos recuerdan que la Navidad es más que regalos: es esperanza.</p>      
        <br></br> .. Algunas películas Animadas recomendadas:

<Acordion titulo1="El expreso polar" titulo2="El Grinch (animada)" 
titulo3="Frozen: una aventura congelada" titulo4="klaus"
cont1="plicula animada de un oso polar" cont2="Película animada recomendada para verla en familia"
cont3="(no es navideña, pero tiene toda la vibra)" cont4="si bien es un pelicula poco conocida es muy entretenida"
></Acordion>
<br></br>Son películas perfectas para maratonear con chocolate caliente y galletas.
        </div>
        <div className="pie">
            <Pie></Pie>
        </div>
    </div>
    </>
  )
} 
export default Peliculasp