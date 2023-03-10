const SeleC = selector => document.getElementById(selector)

const MyMain = SeleC("main");

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

// function renderCard(array,element){
//     let template1=""
//     array.forEach(card => template1 += CrearCard (card))
//     element.innerHTML = template1
// }

// renderCard(card,container)


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

completarTarjetas(data.events,MyMain);

//id del html

const myCheckbox = SeleC("checkCategory");


const listaCategoria = Array.from(new Set(data.events.map (categoria => categoria.category)))

const opciones = listaCategoria.reduce((acumulador,category) =>{
    return acumulador += `<input class="form-check-input" type="checkbox" value="${category}" id="flexCheckDefault;">
                          <label class="form-check-label text-light" for="flexCheckDefault">${category}</label>` },'');
myCheckbox.innerHTML = opciones


myCheckbox.addEventListener('change', e =>{
    completarTarjetas(filtrarCardsRadio(data.events),MyMain) 

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
    return completarTarjetas (filtroCruzado(),MyMain)
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
    return filtrarCardsRadio(filtrarCardText(data.events) )
}

console.log([document])


// filtrarCardText(data.events)
//     const resulFiltrarCards = filtrarCardText(data.events)
//     console.log (resulFiltrarCards)
//     completarTarjetas(resulFiltrarCards) 

// const inpuText = document.querySelector('input[type="search"]')
// const inputFilter= data.events.filter(cards => `${cards.name.toLowerCase()}`.includes(inpuText.name.toLowerCase()))



// console.log(data.events)






