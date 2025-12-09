export function Compo2(props)
{
    <>
      <div class="card" style="width: 18rem;">
        <img src={props.ruta} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5>{props.titulo}</h5>
            <p class="card-text">{props.cont}</p>
        </div>
      </div>  
    
    
    </>
} export default Compo2