const MyMain = document.getElementById( "main" );





MyMain.innerHTML= template; 

function crearTarjetaInner(data.events){
    const template =
  `<div class="card d-flex container-fluid b-brown3 text-light col-12 col-sm-6 col-md-6 col-lg-3 my-3" style="width: 15rem;">
            <img src="${data.events.image}" class="card-img-top" alt="libros"  height="200px">
            <div class="card-body">
                <h5 class="card-title">${data.events.name}</h5>
                <div class="card-body d-flex justify-content-around">
                    <p class ="card-text"> price: ${data.events.price}</p>
                    <a href="./details.html" class="btn btn-warning">more details</a>
                </div>
            </div>
        </div>  
`   
return template
}

function pintarTarjetas( listaEventos, tarjeta ){
    let template = ''
    for( let data.events of listaEventos ){
        template += crearTarjetaInner( data.events )
    }
    tarjeta.innerHTML = template
}

