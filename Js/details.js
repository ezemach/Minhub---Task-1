const container = document.querySelector("main")

const params = new URLSearchParams(location.search)

const id = params.get("id")

let card = data.events.find(element => element._id === id)

function CrearCard(obj){
    return `<div class="card mb-3 container-fluid d-flex align-items-center" style="max-width: 840px;">
        <div class="row g-0 container-fluid d-flex align-items-center">
            <div class="col-md-4">
                <img src="${obj.image}" class="d-flex img-fluid rounded-3 " alt="Books" style="height: 300px;">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold fs-2">${obj.name}</h5>
                    <p class="card-text"><b>date: </b>${obj.date}</p>
                    <p class="card-text"><b>description: </b> ${obj.description}</p>
                    <p class="card-text"><b>category: </b>${obj.category}</p>
                    <p class="card-text"><b>place: </b>${obj.place}</p>
                    <p class="card-text"><b>capacity: </b>${obj.capacity}</p>
                    <p class="card-text"><b>assistance or estimate: </b>${obj.assistance || obj.estimate}</p>
                    <p class="card-text"><b>price: </b>${obj.price}</p>
                    
                </div>
            </div>
        </div>
    </div>
    `}

function renderCard(obj,element){
    let template1=""
    template1 += CrearCard(obj)
    element.innerHTML = template1
}

renderCard(card,container)



