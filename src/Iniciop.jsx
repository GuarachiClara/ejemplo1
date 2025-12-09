import './App.css'
import CompAds1 from './CompAds1'
import { Inicio } from './Inicio'
import { Pie } from './Pie'

export function Iniciop(){
  return(
    <><div className="padre">

      <div className="cabeza">
      
      </div>
      <div className="contenido">
      <Inicio></Inicio>
      </div>
      <div className="ads">

      </div>
      
      <div className="pie">
        <Pie></Pie>
      </div>

    </div>
    </>
  )
} 
export default Iniciop
