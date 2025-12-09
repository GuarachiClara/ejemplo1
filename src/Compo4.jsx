import './App.css'
import { Link } from 'react-router-dom'
function Compo4(props){
return(
    <>
     <div class="cont"class="container-fluid">
        <br></br>
              <img src={props.ruta} class="img-thumbnail" class="imgads"/>
              <h5>{props.titulo}</h5>
              <p>{props.cont}</p>

            </div>
    </>

)
} export default Compo4