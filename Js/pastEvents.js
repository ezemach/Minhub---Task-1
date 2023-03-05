const MyMainPast = document.getElementById("mainPast");

function crearTarjetaInner(tarjeta){
    let template =
  `<div class="card d-flex container-fluid b-brown3 text-light col-12 col-sm-6 col-md-6 col-lg-3 my-3"      style="width: 15rem;">
            <img src="${tarjeta.image}" class="card-img-top" alt="libros"  height="200px">
            <div class="card-body">
                <h5 class="card-title">${tarjeta.name}</h5>
                <div class="card-body d-flex justify-content-around">
                    <p class ="card-text"> price: ${tarjeta.price}</p>
                    <a href="./details.html" class="btn btn-warning">more details</a>
                </div>
            </div>
    </div>  
`
return template
}

function completarTarjetas(listaEventos, elemento ){
    let template = '';
    for( let tarjeta of listaEventos){
        template += crearTarjetaInner(tarjeta);
    }
    elemento.innerHTML = template;
}

function filtrarLista( lista, clave='date',valor='2021'){
    let aux = []
    for( let i = lista.events.length - 1 ; i >= 0 ; i-- ){
        if( lista.events[i][clave].includes( valor )){
            aux.push( lista.events[i] )
        }
    }
    return aux
}

const tarjetaEventoPasado = filtrarLista(data , 'date', '2021' )

completarTarjetas(tarjetaEventoPasado, MyMainPast)


