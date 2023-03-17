const url = 'https://mindhub-xj03.onrender.com/api/amazing'

const { createApp } = Vue

const app =   createApp({
    data() {
      return {
        valorBusqueda:"",
        tarjetas : [],
        tarjetasFiltradas:[],
        params: "",
        id: "",
        change:"",
      }
      
    },
    created(){
        fetch(url).then(response => response.json())
        .then((data) => {
        this.tarjetas= data.events
        this.params = new URLSearchParams(location.search);
        this.id = this.params.get("id");  

        this.tarjetasFiltradas = data.events.find(elemento => elemento._id == this.id);
        this.change = this.tarjetasFiltradas.estimate ? 'estimate' : 'assistance';
        })            
        .catch(err => console.log (err))
    },
  })
  
 
  app.mount('#app')



