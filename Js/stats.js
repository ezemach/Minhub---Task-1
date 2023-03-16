const url = 'https://mindhub-xj03.onrender.com/api/amazing'

const Eventos1 = document.querySelector ("#PrimerosEventos")
const EventosPast = document.querySelector ("#PastEventos")
const EventosFut = document.querySelector ("#FutEventos")

function templateTP(eventoMay, eventoMen, eventoCap){
   return `<tr>
                <td>${eventoMay.name}</td>
                <td>${eventoMen.name}</td>
                <td>${eventoCap.name}</td>
          </tr>`   
}


function completarTarjetas(eventoMay, eventoMen, eventoCap, elemento){
    let template = '';
    template += templateTP(eventoMay, eventoMen, eventoCap);
    elemento.innerHTML = template;
}


function traerEventos() {
  fetch(url).then((response) => {return response.json();})
    .then((datos) => {completarTarjetas(eventoMayorA(datos.events, datos),eventoMenorA(datos.events, datos),resultadoMasCapacidad(datos.events),Eventos1);
    //   console.log(datos.events, datos)
      const categories = {};
      // Procesamos cada evento
      filtrarLista2(datos.events, datos).forEach((event) => {
        if (!categories[event.category]) {
          categories[event.category] = {
            price: 0,
            estimate: 0,
            capacity: 0,
          };
        }
        // Sumamos los ingresos la asistencia y la capacity a la categoría correspondiente
        categories[event.category].price += event.price * event.estimate;
        categories[event.category].capacity += event.capacity;
        categories[event.category].estimate += event.estimate;
      });
    //   console.log(categories)
      // Mostramos la información de cada categoría
      let templeDos = "";
      for (const category in categories) {
        const prices = categories[category].price;
        const estimate = categories[category].estimate;
        const capacity = categories[category].capacity;
        const porcentaje = ((estimate * 100) / capacity).toFixed(2);
        const temple = () => {
          return `<tr>
                    <td>${category} </td>
                    <td>${prices} </td>
                    <td>${porcentaje}%</td>
                </tr>`;
        };
        templeDos += temple();
      }
      EventosFut.innerHTML = templeDos;

      ////

      const categories2 = {};
      // Procesamos cada evento
      filtrarLista(datos.events, datos).forEach((event) => {
        // Si la categoría no existe la creamos
        if (!categories2[event.category]) {
          categories2[event.category] = {
            price: 0,
            assistance: 0,
            capacity: 0,
          };
        }
        // Sumamos los ingresos la asistencia y la capacity a la categoría correspondiente
        categories2[event.category].price += event.price * event.assistance;
        categories2[event.category].capacity += event.capacity;
        categories2[event.category].assistance += event.assistance;
      });
      // Mostramos la información de cada categoría
      let templeTres = "";
      for (const category in categories2) {
        const prices = categories2[category].price;
        const assistance = categories2[category].assistance;
        const capacity = categories2[category].capacity;
        const porcentaje = ((assistance * 100) / capacity).toFixed(2);
        const temple = () => {
          return `<tr>
                    <td>${category} </td>
                    <td>${prices} </td>
                    <td>${porcentaje}%</td>
                </tr>`;
        };
        templeTres += temple();
      }
      EventosPast.innerHTML = templeTres;
    })
    .catch((err) => console.log(err));
}


traerEventos ()

const eventoMayorA = (array,evento) => filtrarLista(array, evento).sort((evento1, evento2) => {
    return (
        (evento1.assistance / evento1.capacity) * 100 -
        (evento2.assistance / evento2.capacity) * 100 
    );
}).slice(-1)[0];

const eventoMenorA = (array,evento) => filtrarLista(array, evento).sort((evento1, evento2) => {
    return (
        (evento1.assistance / evento1.capacity) * 100 -
        (evento2.assistance / evento2.capacity) * 100
    );
}).slice(0,1)[0];


// evento con mayor capacidad
const resultadoMasCapacidad = (array) => array.sort((evento1, evento2) => {
    return ( evento1.capacity - evento2.capacity);
}).slice(-1)[0];




function filtrarLista(array, evento){
    return array.filter(event => event.date < evento.currentDate);
}

function filtrarLista2(array, evento){
    return array.filter(event => event.date > evento.currentDate);
}


