import './App.css'
import CompAds1 from './CompAds1'
import Compo2 from './Compo2'
import { Pie } from './Pie'

export function Activip(){
  return(
    <>
    <div className="padre">
        <div className="contenido">
           <p className="paf">
            ACTIVIDADES
           </p>
           <div class="row">
                    <div class="col-7 col-sm-5">
                        <img src="../public/act1.jpg" class="img2"/>
                        <h5 className='paf'>Manualidades </h5>
                        <p className='paf'>una de las actividades más entretenidas porque puedes crear tus propios 
                            adornos sin gastar mucho.
                             Desde hacer tarjetas hechas a mano, pintar esferas, diseñ
                             ar co
                             ronas para la puerta o incluso hacer decoración con materiales reciclados.
                            </p>
                    </div>

                    <div class="col-7 col-sm-5">
                        <img src="../public/act2.jpg" class="img2"/>
                        <h5 className='paf'>maraton de peliculas</h5>
<p>Arma un maratón con tus películas navideñas favoritas: clásicas, animadas, comedias o incluso historias románticas. Prepara palomitas, chocolate caliente y mantas, y conviértelo en una noche temática. Puedes hacerlo con amigos, familia o incluso solo: lo importante es disfrutar del ambiente.</p>
                    </div>
                    <div class="col-7 col-sm-5">
                        <img src="../public/act3.jpg" class="img2"/>
                        <h5 className='paf'>repostería navideña</h5>
                        <p className='paf'>
                            Una de las actividades más deliciosas es cocinar galletas de navidad, brownies decorados o cupcakes temáticos. No necesitas ser experto: muchas recetas son fáciles y divertidas. Decorar galletas con glaseado de colores se vuelve una competencia amistosa que siempre termina entre risas (y mucha azúcar).
                        </p>
                    </div>
                    <div class="col-7 col-sm-5">
                        <img src="../public/act4.jpg" class="img2"/>
                        <h5 className='paf'>intercambio de regalos</h5>
                        <p className='paf'>
                            Organiza un intercambio de regalos diferente: “amigo secreto con presupuesto mínimo”, regalos hechos a mano, regalos temáticos o incluso regalos chistosos. Esta actividad siempre genera buenas historias y hace que la navidad se sienta más cercana y divertida.
                        </p>
                    </div>

                    <div class="w-100"></div>
                    <br></br>
<p></p>
                </div>
           <Compo2 ruta="../public/act1.jpg" titulo="Manualidades Navideñas"
           cont="Hacer manualidades es una de las actividades más entretenidas porque puedes crear tus propios adornos sin gastar mucho. Desde hacer tarjetas hechas a mano, pintar esferas, diseñar coronas para la puerta o incluso hacer decoración con materiales reciclados. Además, es un plan súper relajante para pasar una tarde con música navideña de fondo."></Compo2>
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
export default Activip