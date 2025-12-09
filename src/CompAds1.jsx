
function CompAds1(props){
    return (
        <div class="ads"className="container-fluid">
                <div class="card" style="width: 18rem;">
  <img src={props.ruta} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">{props.paf}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.l1}</li>
    <li class="list-group-item">{props.l2}</li>
    
  </ul>
  <div class="card-body">
    <a href={props.link} class="card-link">visitar</a>
  </div>
</div>
            </div>
    )
}
export default CompAds1