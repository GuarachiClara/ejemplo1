function Compo3(props){
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide img" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={props.ruta1} class="d-block w-100 img" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        
                        <p>{props.cont1}</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={props.ruta2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                    
                        <p>{props.cont2}</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}export default Compo3