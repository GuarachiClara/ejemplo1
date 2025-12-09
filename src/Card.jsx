import './App.css'
function Card(props){
    return(
        <><div class="card" style="width: 18rem;">
            <img src={props.ruta} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{props.titulo}</h5>
                    <p class="card-text">{props.cont}</p>
                    <a href="" class="btn btn-primary">Go go go Cortis</a>
                </div>
            </div>
        </>
    )
}
export default Card 