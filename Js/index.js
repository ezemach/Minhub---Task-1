//Task 2//--------------

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


//-----------------Task 3//--------------


//hacemos un selector de los checkbox utilizando una variable--
const myCheckbox = SeleC("checkCategory");

//1- Obtener las categorias y crear los option
//Obtenemos y armamos "la lista de las categorías"-- Estas categorias las obtenemos del data.events, y se la cita como categoria.category, que es la key correspondiente, y lo Utilizamos como parametro de la funcion map para obtener un "nuevo array" de la lista iterada para obtener solo las categorias que buscamos(parametro funcion, y el current value). 
//luego sobre ese array, realizamos un new set (lo convertimos en un objeto agarra valores unicos) y lo convertimos en array, para aprovechar los metodos de este tipo de objeto, y lo guardamos en una variable "listaCategoría"
//luego sobre esta lista aplicamos el metodo reduce ()el acumulador empieza siendo un array vacio, y le agregamos el elemento//

const listaCategoria = Array.from(new Set(data.events.map (categoria => categoria.category)))

//a la listaCategoria le aplicamos el metodo reduce (se agrega luego de la funcion callback un acumulador), la cual recorre la lista y donde el acc acumula el valor devuelto.

const opciones = listaCategoria.reduce((acumulador,category) =>{
    return acumulador += `<input class="form-check-input" type="checkbox" value="${category}" id="flexCheckDefault;">
                          <label class="form-check-label text-light" for="flexCheckDefault">${category}</label>` },'');
//luego imprimimos la variable opciones en el html  y se crean los option                        
myCheckbox.innerHTML = opciones

//2- crear los eventos. Con el evento change captamos los eventos que ocurren en el navegador y aplicamos los filtros. se lo imprimie en MyMain, se aplica a data.events la funcion filtrarCardsRadio, y se imprimen las tarjetas. Evento change capta cuando cambia el valor de una propiedad
myCheckbox.addEventListener('change', e =>{
    completarTarjetas(filtroCruzado(data.events),MyMain) 
} )

//3- Hacer los filtros. El primer filtro aplicado, mediante el DOM captamos el checkbox chequeado, y lo convertimos en un array. y la guardamos en una variable. Luego le aplicamos la funcion map para crear un nuevo array a partir del value de las categorias. y la guardamos en una variable. LUego ponemos una condicion en donde si no aparece ninguna categoria devuelva todas las cards. luego aplicamos el funcion filter sobre el parametro en donde lo pasamos sobre la conidcional includes (el metodo includes devuelve un booleano (T o F)), finalmente pedimos que se muestre en pantalla y regorne la variable donde fue guardada.
function filtrarCardsRadio (listaCards){
         const radioCheck =  Array.from (document.querySelectorAll('input[type="checkbox"]:checked'))
         const ArrayValue =  radioCheck.map(cardCategory => cardCategory.value) 
         if (ArrayValue == 0){
            return listaCards
         }
         const filtroValue = listaCards.filter(evento=>{return ArrayValue.includes(evento.category)})

         console.log(filtroValue)
         return filtroValue
}
//creamos una variable para captar el otro filtro
const mySearch = SeleC("idSearch");

//utilizamos este evento con el parametro keyup para captar el ingreso de caracteres al buscador, en donde debe imprimir las tarjetas a través de los filtros
mySearch.addEventListener('keyup', e => {
    return completarTarjetas (filtroCruzado(),MyMain)
})

//realizamos una función para filtrar las cards en el search de texto. en donde a los caracteres ingresados los convierta en minuscula y lo guardamos en una variable. asismismo hacemos una condicion en donde si no ingresa ningun caracter retorne todas las cards. Luego aplicamos la funcion filter sobre las cards en donde incluyendo la primera variable, si ingresa el valor, lo pasamos sobre la conidcional includes (el metodo includes devuelve un booleano (T o F), y si contiene el value alguna letra del name de las card los devuelve,
function filtrarCardText(listaCards){
   const input_Filter = mySearch.value.toLowerCase()
   if (input_Filter.length === 0){
    console.log("hola")
    return listaCards}
   const input_Filter2 = listaCards.filter(e => {return e.name.toLowerCase().includes(input_Filter)})
    return input_Filter2
}

//finalmente en el filtro cruzado, a la lista data.events se aplica la funcion filtrar card text, y luego filtrarRadio, y lo retorna.
function filtroCruzado(){
    return filtrarCardsRadio(filtrarCardText(data.events) )
}

console.log([document])

let array = []

let array2 = array



// array = ARRAY2

// [] = []


// let numeros =[1, 2,3,4,5]

// let numeroNuevo = numeros.filter(numero=> numero > 2 )

// console.log(numeroNuevo)

// let nombres =["ezequiel", "nicolas", "jose"]

// let Nnombres = nombres.map (nombre => nombre.toLocaleUpperCase() + ".")

// console.log(Nnombres)








