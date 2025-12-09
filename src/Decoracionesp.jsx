import './App.css'
import Compo from './Compo'
import Compo3 from './Compo3'
import { Pie } from './Pie'
import Compo4 from './Compo4'

export function Decoracionesp(){
  return(
    <>
    <div className="padre">
        <div className="contenido">
           La decoración navideña es una de las partes más emocionantes de la temporada. Transformar un espacio normal en un ambiente mágico es casi como recrear una película. Los colores clásicos —rojo, verde, dorado y blanco— pueden mezclarse con luces cálidas, velas, coronas de puerta y figuras como renos o muñecos de nieve.
<br></br>
Algunas familias prefieren estilos tradicionales, otras optan por decoraciones modernas e incluso hay quienes usan tonos pastel o temáticas específicas (como cascanueces, nieve, galletas de jengibre, etc.). Decorar no solo embellece la casa, sino que también marca el inicio oficial del espíritu navideño, ese que hace que todo se sienta más alegre.
        <Compo3 ruta1="../public/act1.jpg" cont1="..."
        ruta2="../public/act4.jpg" cont2="..."></Compo3>
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
export default Decoracionesp