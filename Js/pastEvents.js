const url = 'https://mindhub-xj03.onrender.com/api/amazing'

const { createApp } = Vue

const app =   createApp({
    data() {
      return {
        valorBusqueda:"",
        tarjetas : [],
        categoriasCheck : [],
        checked:[],
        tarjetasFiltradas:undefined
      }
    },
    created(){
        fetch(url).then(response => response.json())
        .then((data) => {
        this.tarjetas= data.events
        this.categoriasCheck = Array.from( new Set( data.events.map( event => event.category )))    
        this.tarjetasFiltradas = data.events.filter(event => event.date < data.currentDate);
        })            
        .catch(err => console.log (err))
    },
    methods: {
      filtrocruzado(){
            this.tarjetasFiltradas = this.tarjetas.filter( event => {
                return (event.name.toLowerCase().includes( this.valorBusqueda.toLowerCase())
                && ((this.checked.includes( event.category )) || this.checked.length === 0))
      })
    },
  }
  })
  
  app.mount('#app')








