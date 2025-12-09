import './App.css'

export function Inicio(){
    return(
        <>
        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Historia de la Navidad</a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Imágenes</button>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Cerrar ambas pestañas</button>
        </p>
        <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                    <p>La Navidad no nació exactamente como la conocemos hoy. Su origen se remonta a miles de años atrás, cuando antiguas culturas celebraban el solsticio de invierno, la noche más larga del año. Para ellos, esta fecha era símbolo de “renacimiento” porque a partir de ahí los días empezaban a ser más largos.
</p>
<p>
    Cuando el cristianismo comenzó a expandirse, decidió convertir esta celebración en el nacimiento de Jesús, que se eligió simbólicamente el 25 de diciembre. Con el tiempo, la tradición se mezcló con costumbres de distintos países hasta formar lo que hoy entendemos como Navidad: luces, regalos, comida rica y reuniones familiares llenas de cariño.
</p>
Lo interesante es que no importa la cultura o religión: casi todos los países adoptaron la Navidad como un momento para compartir, agradecer y celebrar la vida.
                </div>
                </div>
            </div>
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">
                    <img className='img' src="public\nav2.jpg" alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="p">
          <h2>EL ORIGEN PAGANO DE LA NAVIDAD</h2>
        <p>Aunque normalmente asociamos el origen de la Navidad a los mitos cristianos y al catolicismo, puesto que representa el nacimiento del niño Jesús; en realidad, esto es un error, al menos tal y como tenemos hoy en día aceptada la Navidad.
            <br></br>
Precisamente, por esta duda entre la Navidad pagana y la Navidad cristiana, hubo un caso en 1990 en el que la junta escolar de Solon (Ohio) decidió eliminar todas la representaciones de la Navidad en cualquier ámbito escolar, puesto que era una práctica en contra del Estado laico de la ciudad, es decir, no respetaba la sepación entre Iglesia y Estado. Igualmente, la junta perdió el caso porque las familias se oposieron a que sus hijos no pudiesen celebrar la Navidad en el colegio, defendiendo que la práctica de la Navidad era un acto secular y formaba parte de todas las culturas del mundo. A pesar de que la junta perdiera el caso, sí lograron eliminar las oraciones y la lectura de la biblia, asociadas a la celebración de la Navidad.</p>
         
        </div>
         </>
    )
}
export default Inicio