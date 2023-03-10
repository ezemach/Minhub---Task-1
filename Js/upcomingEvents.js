const SeleC = selector => document.getElementById(selector)

const MyMainUp = SeleC("mainUp");

function crearTarjetaInner(tarjeta){
    let template =
  `<div class="card d-flex container-fluid b-brown3 text-light col-12 col-sm-6 col-md-6 col-lg-3 my-3"      style="width: 15rem;">
            <img src="${tarjeta.image}" class="card-img-top" alt="libros"  height="200px">
            <div class="card-body">
                <h5 class="card-title">${tarjeta.name}</h5>
                <div class="card-body d-flex justify-content-around">
                    <p class ="card-text"> price: ${tarjeta.price}</p>
                    <a href="./details.html?id=${tarjeta._id}" class="btn btn-warning">more details</a>
                </div>
            </div>
    </div>  
`
return template
}

function mensaje (){
    return `<h3 class="text-center">Your search has not been successful!</h3>`
}

function completarTarjetas(listaEventos, elemento ){
    let template = '';
    if (listaEventos.length ==0){
        template = mensaje()
    }
    for( let tarjeta of listaEventos){
        template += crearTarjetaInner(tarjeta);
    }
    elemento.innerHTML = template;
}

function filtrarLista(array){
    return array.filter(event => event.date > data.currentDate);
}

const tarjetaEventoFuturo = filtrarLista(data.events)

completarTarjetas(tarjetaEventoFuturo, MyMainUp)

const myCheckbox = SeleC("checkCategory");
// const mySearch = SeleC("idSearch");

const listaCategoria = Array.from(new Set(data.events.map (categoria => categoria.category)))

const opciones = listaCategoria.reduce((acumulador,category) =>{
    return acumulador += `<input class="form-check-input" type="checkbox" value="${category}" id="flexCheckDefault;">
                         <label class="form-check-label text-light" for="flexCheckDefault">${category}</label>` },'');
myCheckbox.innerHTML = opciones


myCheckbox.addEventListener('change', e =>{
    completarTarjetas(filtrarCardsRadio(tarjetaEventoFuturo),MyMainUp) 

} )


function filtrarCardsRadio (listaCards){
         const radioCheck =  Array.from (document.querySelectorAll('input[type="checkbox"]:checked'))
         const ArrayValue =  radioCheck.map(cardCategory => cardCategory.value) 
         if (ArrayValue == 0){
            return listaCards
         }
         const filtroValue = listaCards.filter(evento=>{
            return ArrayValue.includes(evento.category)
         })
         console.log(filtroValue)
         return filtroValue
}

const mySearch = SeleC("idSearch");


mySearch.addEventListener('keyup', e => {
    return completarTarjetas (filtroCruzado(),MyMainUp)
})


function filtrarCardText(listaCards){
   const input_Filter = mySearch.value.toLowerCase()
   if (input_Filter===0){
    return listaCards
   }
   const input_Filter2 = listaCards.filter(e => {
    return e.name.toLowerCase().includes(input_Filter)})

    return input_Filter2
}

function filtroCruzado(){
    return filtrarCardsRadio(filtrarCardText(tarjetaEventoFuturo) )
}

