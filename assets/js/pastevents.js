import data from "./amazing.js";
const divCardsPastEvents = document.getElementById("cardPastEvents");
let fragmento = document.createDocumentFragment();
function pastEvents(events, date) {
    for (let event of events) {
    // let div=document.createElement('div');
    // div.classList='col';
    if (event.date < date) {
        let div = document.createElement("div");
        div.classList = "card p-2 m-3";
        div.innerHTML = `
            <img src="${event.image}" class="card-img-top" alt="${event.category}">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <p class="card-price">Price: ${event.price}</p>
                <a href="./details.html" class="btn btn-primary">Details</a>
            </div>`;
        fragmento.appendChild(div);
    }
    }
    divCardsPastEvents.appendChild(fragmento);
}
let cards = pastEvents(data.events, data.currentDate);
